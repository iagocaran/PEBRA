<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="APEX Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/apex.png')"
          transition="scale-transition"
          width="100"
        />

        <v-img
          alt="PEBra Logo"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          :src="require('@/assets/pebra.png')"
          width="150"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn text>
        <v-icon color="light-blue darken-3">mdi-sitemap</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon color="light-blue darken-3">mdi-format-font-size-decrease</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon color="light-blue darken-3">mdi-format-font-size-increase</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon color="light-blue darken-3">mdi-contrast-circle</v-icon>
      </v-btn>
      <v-btn text @click="dialog = true">
        <span class="light-blue--text text--darken-3">Entrar</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="white" elevation="8">
      <v-col class="text-center">
        2020 - Apex Brasil
      </v-col>
    </v-footer>
    <v-dialog v-model="dialog" persistent max-width="400">
      <login></login>
    </v-dialog>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Login from '@/components/Login'

export default Vue.extend({
  name: 'App',

  components: {
      Login
  },

  data: () => ({
    dialog: false
  }),
});
</script>

<style scoped>
  .theme--light.v-application {
    background: #EBEBEB !important;
  }
</style>