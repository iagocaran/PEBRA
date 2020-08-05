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
      <v-list-item>
        <v-tabs v-model="tab">
          <v-tab><v-icon class="mr-2">mdi-handshake</v-icon>Meu Consórcios</v-tab>
          <v-tab><v-icon class="mr-2">mdi-airplane-takeoff</v-icon>Consórcios de Exportação</v-tab>
          <v-tab><v-icon class="mr-2">mdi-truck-fast</v-icon>Consórcios de Transporte</v-tab>
        </v-tabs>
      </v-list-item>
    </v-card>
    <v-tabs-items v-model="tab" style="background: none">
      <v-tab-item>
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
      </v-tab-item>
      <v-tab-item>
        <v-card raised class="mb-2">
          <v-list-item three-line>
            <div class="mr-5">
              <v-icon size="50">mdi-airplane-takeoff</v-icon>
            </div>
            <v-list-item-content class="d-block">
              <v-list-item-title class="headline mb-0">
                 Produtores de Morango de Atibaia e Região
              </v-list-item-title>
              <div class="caption mb-2">15km</div>
              <v-list-item-subtitle class="mb-3">
                Grupo de pequenos agricultores visando o partilhamento do montante de exportações para a Argentina.
              </v-list-item-subtitle>
              <v-btn color="primary" text class="pa-0">Solicitar participação</v-btn>
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
                Consórcio do pico da Jaguatiri
              </v-list-item-title>
              <div class="caption mb-2">50km</div>
              <v-list-item-subtitle class="mb-3">
                Grupo de produtores têxtis da região de Jaguatiri, compartilhamos cargas de caminhão, raramente de trem e containers.
              </v-list-item-subtitle>
              <v-btn color="primary" text class="pa-0" disabled>Não aceita mais membros</v-btn>
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
                Consórcio do pico da Jaguatiri
              </v-list-item-title>
              <div class="caption mb-2">50km</div>
              <v-list-item-subtitle class="mb-3">
                Grupo de produtores têxtis da região de Jaguatiri, compartilhamos cargas de caminhão, raramente de trem e containers.
              </v-list-item-subtitle>
              <v-btn color="primary" text class="pa-0" disabled>Não aceita mais membros</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card raised class="mb-2">
          <v-list-item three-line>
            <div class="mr-5">
              <v-icon size="50">mdi-truck-fast</v-icon>
            </div>
            <v-list-item-content class="d-block">
              <v-list-item-title class="headline mb-0">
                Consórcio do pico do Jaguariti
              </v-list-item-title>
              <div class="caption mb-2">50km</div>
              <v-list-item-subtitle class="mb-3">
                Grupo de produtores têxtis da região de Jaguariti, compartilhamos cargas de caminhão, raramente de trem e containers.
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
                Consórcio Grande ABC
              </v-list-item-title>
              <div class="caption mb-2">120km</div>
              <v-list-item-subtitle class="mb-3">
                Grupo de indústrias em geral. Aceitamos qualquer tipo de empresa localizada na região da grande ABC para compartilhar os transportes até o porto de Santos.
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
                Associação das indústrias de Itu
              </v-list-item-title>
              <div class="caption mb-2">10km</div>
              <v-list-item-subtitle class="mb-3">
                Associação com o objetivo de compartilhar containers de <trem></trem>
              </v-list-item-subtitle>
              <v-btn color="primary" text class="pa-0" disbaled>Não aceita mais membros</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Consortium',
    data: () => ({
      tab: null
    }),
    methods: {}
  })
</script>