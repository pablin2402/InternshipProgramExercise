<template>
  <v-container>
    <h1>Canciones Itunes</h1>
    <v-text-field
      placeholder="Busca tu canción favorita en Itunes"
      v-model="selectedSong"
      append-icon="mdi-magnify"
      outlined
      rounded
    ></v-text-field>
    <v-btn color="primary" v-on:click="getByName"> Primary </v-btn>
    <v-row dense>
      <v-col
        v-for="(item, i) in listOfAlbums"
        :key="i"
        cols="4"
        class="pa-3 d-flex flex-column"
      >
        <v-card>
          <v-img
            :src="item.artworkUrl100"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
          </v-img>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                v-text="item.collectionName"
                class="font-weight-light"
              ></v-card-title>

              <v-card-subtitle v-text="item.artistName"></v-card-subtitle>

              <v-card-actions>
                <v-btn text> Price {{ item.collectionPrice }} $ </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { API_HOST } from "../utils/constant";
import { config } from "../utils/config";

export default {
  name: "Songs",

  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
    listOfAlbums: [],
    artistId: 0,
    selectedSong: "",
  }),

  mounted() {
    this.getByName();
  },
  methods: {
    async getByName() {
      var self = this;
      axios
        .get(API_HOST + "term=" + self.selectedSong + "&limit=25/", config)
        .then((response) => {
          this.listOfAlbums = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed() {
    this.getByName();
  },
};
</script>
