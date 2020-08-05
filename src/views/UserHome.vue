<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="PEBra Logo"
          class="shrink mt-1"
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
    </v-app-bar>

    <v-content>
      <v-container class="pt-0">
        <v-row>
          <v-col class="pa-0">
            <v-row>
              <v-col cols="12" class="pb-0">
                <v-bottom-navigation class="justify-space-around">
                  <v-btn to="/user/home">
                    <span>Meu caminho</span>
                    <v-icon>mdi-road-variant</v-icon>
                  </v-btn>
                  <v-btn to="/user/news">
                    <span>Noticias</span>
                    <v-icon>mdi-newspaper</v-icon>
                  </v-btn>
                  <v-btn disabled style="background: transparent !important;">
                    <span>Eventos</span>
                    <v-icon>mdi-calendar</v-icon>
                  </v-btn>
                  <v-btn disabled style="background: transparent !important;">
                    <span>Análises</span>
                    <v-icon>mdi-chart-line</v-icon>
                  </v-btn>
                  <v-btn to="/user/consortium">
                    <span>Consórcio</span>
                    <v-icon>mdi-account-group</v-icon>
                  </v-btn>
                  <v-btn disabled style="background: transparent !important;">
                    <span>Meu negócio</span>
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </v-bottom-navigation>
              </v-col>
              <v-col>
                <router-view>
                </router-view>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer color="white" elevation="8">
      <v-col class="text-center">
        2020 - PEBra
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Home',
    data: () => ({}),
  })
</script>

<style scoped>
</style>