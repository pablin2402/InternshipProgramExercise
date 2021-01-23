<template>
  <v-container>
    <h1>Canciones Itunes</h1>
    <br />
    <v-text-field
      placeholder="Busca tu canción favorita en Itunes"
      v-model="selectedSong"
      filled
      rounded
      dense
    ></v-text-field>
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
    listOfSongs: [],
    selectedSong: "",
  }),

  async mounted() {
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
        "https://itunes.apple.com/search?term=jack+johnson&limit=25/",
        config,
        {
          proxy: "http://localhost:8080",
        }
      )
      .then((response) => {
        this.listOfSongs = response.data;
        console.log("caca" + response.data.results[0].kind);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
