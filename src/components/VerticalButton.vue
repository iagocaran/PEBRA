<template>
  <v-btn text class="text-center pa-1" style="height: auto;">
    <div class="d-flex flex-column">
      <v-icon class="mb-2" size="32" color="light-blue darken-3">{{ icon }}</v-icon>
      <span class="light-blue--text text--darken-3"><slot></slot></span>
    </div>
  </v-btn>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'VerticalButton',
    props: [
      'icon'
    ],
    data: () => ({})
  })
</script>