<template>
  <v-card class="pa-6">
    <div>
      <h2>Cadastro realizado com sucesso!</h2>
      <p>Você receberá um e-mail para ativação de sua conta.</p>
    </div>
    <v-btn color="primary" block @click="close">Voltar para o login</v-btn>
  </v-card>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Terms',
    data: () => ({
    }),
    methods: {
      close() {
        this.$emit('close', true)
      }
    }
  })
</script>

<style scoped>

</style>
