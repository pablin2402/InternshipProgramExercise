<template>
  <v-container>
    <v-row dense>
      <h1>Canciones Itunes</h1>
      <br />
      <br />
      <br />
      <br />
      <br />

      <v-text-field
        placeholder="Busca tu canción favorita en Itunes"
        v-model="selectedSong"
        filled
        rounded
        dense
      ></v-text-field>
      <br />
      <br />
      <br />
      <br />
      <br />

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
            height="200px"
          >
            <v-card-title v-text="item.collectionName"></v-card-title>
          </v-img>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="headline"
                v-text="item.collectionName"
              ></v-card-title>

              <v-card-subtitle v-text="item.artistName"></v-card-subtitle>

              <v-card-actions> </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

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
    this.getArtistId();
    //  this.getAlbumsByArtist();
  },
  methods: {
    async getArtistId() {
      var config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true",
        },
      };

      await axios
        .get(
          "https://itunes.apple.com/search?term=jack+johnson&limit=10/",
          config
        )
        .then((response) => {
          this.listOfAlbums = response.data.results;

          console.log(this.listOfAlbums);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getAlbumsByArtist() {
      var config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true",
        },
      };

      await axios
        .get("https://itunes.apple.com/lookup?id=909253&entity=album ", config)
        .then((response) => {
          this.listOfAlbums = response.data;
          console.log(this.listOfAlbums);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
