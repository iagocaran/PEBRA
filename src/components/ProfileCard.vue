<template>
  <v-card raised class="mb-2">
    <div class="text-center">
      <v-img src="@/assets/user-logo.png" class="text-center"></v-img>
    </div>
    <v-card-title class="text-uppercase pb-1">Technology - Slogan your company</v-card-title>
    <v-card-text class="text-left">
      <p class="mb-1">CNPJ: 12.345.67/0001-01</p>
      <v-progress-linear rounded color="green" :height="24" :value="0" class="mb-1">
        <div class="font-weight-bold pa-2">0%</div>
      </v-progress-linear>
      <p class="mb-0">Complete seu perfil agora e desfrute de nossos benefícios</p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'ProfileCard',
    props: [
    ],
    data: () => ({})
  })
</script>