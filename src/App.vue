<template>
  <v-app>
    <v-main>
      <v-content class="content">
        <router-view />
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
