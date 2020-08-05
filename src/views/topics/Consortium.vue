<template>
  <div>
    <v-card raised class="mb-2">
      <v-card-title class="headline"><b>Consórcio</b></v-card-title>
      <v-list-item>
        <v-list-item-content class="body-2">
          Participe de um consórcio para aumentar aumentar suas chances de sucesso
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content class="body-2">
          Sua localização atual: Rua Atibaia, 28 - Bragança Paulista - CEP: 12900-270
        </v-list-item-content>
        <v-list-item-action>
          <v-btn color="primary">Mudar localização</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-card>
    <v-card raised class="mb-2">
      <v-list-item three-line>
        <div class="mr-5">
          <v-icon size="50">mdi-truck-fast</v-icon>
        </div>
        <v-list-item-content class="d-block">
          <v-list-item-title class="headline mb-0">
            Consórcio de transporte do pico do Jaguariti
          </v-list-item-title>
          <div class="caption mb-2">50km</div>
          <v-list-item-subtitle class="mb-3">
            Grupo de produtores da região de Jaguariti para compartilhamento de cargas
          </v-list-item-subtitle>
          <v-btn color="primary">Ver notificações</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card raised class="mb-2">
      <v-list-item three-line>
        <div class="mr-5">
          <v-icon size="50">mdi-airplane-takeoff</v-icon>
        </div>
        <v-list-item-content class="d-block">
          <v-list-item-title class="headline mb-0">
            Consórcio de exportação do ABC Paulista
          </v-list-item-title>
          <div class="caption mb-2">214km</div>
          <v-list-item-subtitle class="mb-3">
            União de produtores da região do ABC Paulista para formar parcerias e vencerem a concorrência inernacional.
          </v-list-item-subtitle>
          <v-btn color="primary" text class="pa-0">Solicitar participação</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card raised class="mb-2">
      <v-list-item three-line>
        <div class="mr-5">
          <v-icon size="50">mdi-truck-fast</v-icon>
        </div>
        <v-list-item-content class="d-block">
          <v-list-item-title class="headline mb-0">
            Consórcio de apicultores de São Paulo
          </v-list-item-title>
          <div class="caption mb-2">125km</div>
          <v-list-item-subtitle class="mb-3">
            Grupo de apicultores da região de São Paulo para compartilhamento de cargas
          </v-list-item-subtitle>
          <v-btn color="primary" text class="pa-0">Solicitar participação</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Consortium',
    data: () => ({}),
    methods: {}
  })
</script>