<template>
  <v-card class="text-center pa-6">
    <v-img src="@/assets/apex.png"></v-img>
    <v-tabs v-model="tab" centered>
      <v-tab>Conectar</v-tab>
      <div style="width: 60px"></div>
      <v-tab>Cadastrar</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-text-field label="E-mail" required hide-details="auto"></v-text-field>
          <v-text-field label="Senha" type="password" hide-details="auto"></v-text-field>
          <div class="text-right mb-2">
            <v-btn text class="caption light-blue--text text--darken-3">Esqueceu sua senha?</v-btn>
          </div>
          <v-btn color="primary" block>Entrar</v-btn>
          <div class="line-center ma-4">
            <span class="pa-2 text-uppercase font-weight-medium grey--text text--darken-1">Ou</span>
          </div>
          <div class="d-flex justify-space-around mb-4">
            <v-btn text><v-icon size="50" color="grey darken-1">mdi-google</v-icon></v-btn>
            <v-btn text><v-icon size="50" color="grey darken-1">mdi-linkedin</v-icon></v-btn>
            <v-btn text><v-icon size="50" color="grey darken-1">mdi-microsoft</v-icon></v-btn>
          </div>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-text-field label="E-mail" required hide-details="auto"></v-text-field>
          <v-text-field label="Senha" type="password" hide-details="auto"></v-text-field>
          <v-checkbox v-model="terms">
            <template v-slot:label>
              Li e aceito os <span class="light-blue--text text--darken-3 ml-1" style="text-decoration: underline">Termos de Uso</span>
            </template>
          </v-checkbox>
          <v-btn color="primary" block>Entrar</v-btn>
          <div class="line-center ma-4">
            <span class="pa-2 text-uppercase font-weight-medium grey--text text--darken-1">Ou</span>
          </div>
          <div class="d-flex justify-space-around mb-4">
            <v-btn text><v-icon size="50" color="grey darken-1">mdi-google</v-icon></v-btn>
            <v-btn text><v-icon size="50" color="grey darken-1">mdi-linkedin</v-icon></v-btn>
            <v-btn text><v-icon size="50" color="grey darken-1">mdi-microsoft</v-icon></v-btn>
          </div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Login',

    data: () => ({
        tab: 0,
        terms: false
    }),
  })
</script>

<style scoped>
  .line-center > span {
    display: inline-block;
    background: #fff;
  }
  .line-center {
    text-align: center;
    position: relative;
    z-index: 50;
  }
  .line-center:after {
    content: "";
    position: absolute;
    top: 45%;
    left: 0;
    right: 0;
    border-top: 2px solid #757575;
    z-index: -1;
  }
</style>