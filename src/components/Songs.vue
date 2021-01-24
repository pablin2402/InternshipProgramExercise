<template>
  <v-container>
    <v-flex>
      <v-layout justify-center>
        <h3 id="textfield1" class="title is-4 has-text-centered">
          Itunes Songs.
        </h3>
      </v-layout>
      <br />
      <v-form @submit.prevent="getByName(true)">
        <v-layout justify-center>
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
      <v-layout justify-end v-if="!searching && listOfAlbums.length > 0">
        <v-btn class="ma-2" outlined color="black" v-on:click="sortbyName">
          <v-icon>mdi-format-list-bulleted-square</v-icon> Sort A-Z
        </v-btn>
      </v-layout>
      <v-layout justify-center v-if="!searching && listOfAlbums.length > 0">
        <v-flex xs12 class="text-xs-center">
          <v-btn fab outline color="white" small @click="getByName()">
            <v-icon> mdi-arrow-left </v-icon>
          </v-btn>
          <span class="title black--text mx-4">{{ page }}</span>
          <v-btn fab outline color="white" small @click="getByName(true)">
            <v-icon> mdi-arrow-right</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <br />
      <v-layout justify-center>
        <div v-if="searching">
          <v-progress-circular
            :size="70"
            :width="7"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </div>
      </v-layout>
      <v-layout justify-center>
        <div v-if="noResults && !searching">
          <h3 class="title is-4 has-text-centered">No results found.</h3>
        </div>
      </v-layout>
      <v-row dense v-if="!searching && listOfAlbums.length > 0">
        <v-col
          v-for="(item, i) in listOfAlbums"
          :key="i"
          cols="12"
          sm="3"
          ls="12"
          class="pa-3 d-flex flex-column"
        >
          <v-card height="100%">
            <v-avatar
              :tile="true"
              size="250"
              class="ma-3 center elevation-4 album-box mt-3"
              round
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
                  class="textadapt font-weight-light"
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
    entity: "album",
    page: 0,
    searching: false,
    noResults: false,
  }),

  methods: {
    sortbyName: function () {
      var self = this;
      self.listOfAlbums.sort(function (a, b) {
        if (a.collectionName > b.collectionName) {
          return 1;
        }
        if (a.collectionName < b.collectionName) {
          return -1;
        }
        return 0;
      });
    },
    async getByName(numberOfPage) {
      var self = this;
      self.searching = true;
      axios
        .get(
          API_HOST +
            `term=${self.selectedSong}&entity=${self.entity}&limit=100&offset=${
              self.page * 100
            }`,
          config
        )
        .then((response) => {
          self.searching = false;
          if (numberOfPage) {
            self.page++;
          } else {
            self.page--;
          }
          this.listOfAlbums = response.data.results;
          this.noResults = this.listOfAlbums.length === 0;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    resizeImageUrl: function (size) {
      return size.artworkUrl100.replace("100x100", "300x300");
    },
  },
};
</script>
<style scoped>
.album-box {
  position: relative;
  display: inline-block;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.album-box:hover {
  -webkit-transform: scale(1.12, 1.12);
  transform: scale(1.12, 1.12);
}
.textadapt {
  overflow: hidden;
  text-overflow: ellipsis;
}
.centrado {
  display: inline-block;
}
</style>