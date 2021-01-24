<template>
  <v-container>
    <v-flex>
      <h3 class="headline text-xs-center">Canciones Itunes</h3>
      <br />
      <v-form @submit.prevent="getByName(true)">
        <v-layout row>
          <v-flex xs11>
            <v-text-field
              placeholder="Busca tu canción favorita en Itunes"
              v-model="selectedSong"
              append-icon="mdi-magnify"
              outlined
              rounded
              clearable
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-form>
      <v-row dense>
        <v-col
          v-for="(item, i) in listOfAlbums"
          :key="i"
          cols="4"
          class="pa-3 d-flex flex-column"
        >
          <v-card>
            <v-avatar
              :tile="true"
              size="160"
              class="elevation-4 album-box mt-3"
            >
              <img
                :src="resizeImageUrl(item)"
                alt="Album Cover"
                class="album-cover"
              />
            </v-avatar>

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
    </v-flex>
  </v-container>
</template>

<script>
import axios from "axios";
import { API_HOST } from "../utils/constant";
import { config } from "../utils/config";

export default {
  name: "Songs",

  data: () => ({
    listOfAlbums: [],
    selectedSong: "",
  }),

  mounted() {
    this.getByName();
  },
  methods: {
    async getByName(increase) {
      var self = this;
      axios
        .get(API_HOST + "term=" + self.selectedSong + "&limit=1/", config)
        .then((response) => {
          this.listOfAlbums = response.data.results;
          console.log(increase);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    resizeImageUrl(size) {
      return size.artworkUrl100.replace("100x100", "300x300");
    },
  },
  computed() {
    this.getByName();
  },
};
</script>
<style scoped>
.album-box:hover {
  -webkit-transform: scale(1.12, 1.12);
  transform: scale(1.12, 1.12);
}
</style>