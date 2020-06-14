<template>
  <v-card raised class="mb-2">
    <v-card-title class="text-uppercase pb-1">Bem-vindo!</v-card-title>
    <v-card-text class="text-left">
      <p class="mb-1">Complete seu perfil para acessar nossos benefícios</p>
      <p class="mb-1"><b>E-mail:</b> {{ email }}</p>
      <p class="mb-1"><b>Situação do perfil:</b></p>
      <v-progress-linear rounded color="green" :height="24" :value="0" class="mb-1">
        <div class="font-weight-bold pa-2">0%</div>
      </v-progress-linear>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'EmptyProfileCard',
    methods: {
    },
    created () {
      this.$http.get('/users/me', { baseURL: '/api' })
        .then((res) => { this.email = res.data.email })
        .catch((err) => { console.log(err) })
    },
    data: () => ({
      email: ''
    })
  })
</script>