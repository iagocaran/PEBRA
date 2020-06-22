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
      <v-btn text @click="dialog = true">
        <span class="light-blue--text text--darken-3">Entrar</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="pt-0">
        <v-row>
          <v-col offset-xl="1" xl="2" offset="0" cols="3">
            <empty-profile-card></empty-profile-card>
          </v-col>
          <v-col xl="8" cols="9" class="pa-0">
            <v-row>
              <v-col cols="12" class="pb-0">
                <v-bottom-navigation>
                  <v-btn>
                    <span>Início</span>
                    <v-icon>mdi-road-variant</v-icon>
                  </v-btn>
                  <v-btn>
                    <span>Meu Negócio</span>
                    <v-icon>mdi-briefcase</v-icon>
                  </v-btn>
                  <v-btn>
                    <span>Ferramentas</span>
                    <v-icon>mdi-cog</v-icon>
                  </v-btn>
                  <v-btn>
                    <span>Eventos</span>
                    <v-icon>mdi-calendar</v-icon>
                  </v-btn>
                  <v-btn>
                    <span>Estudos</span>
                    <v-icon>mdi-chart-line</v-icon>
                  </v-btn>
                <v-btn>
                  <span>Contato</span>
                  <v-icon>mdi-account-group</v-icon>
                </v-btn>
                <v-btn>
                  <span>Perfil</span>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
                </v-bottom-navigation>
              </v-col>
              <v-col>
                <v-card raised>
                  <v-card-title class="headline"><b>Meu Caminho Exportador</b></v-card-title>
                  <v-row justify="space-between" class="pa-4 pt-0 pb-6">
                    <v-col cols="5">
                      <v-treeview dense :items="items" open-all>
                        <template v-slot:prepend="{ item }">
                          <v-icon v-if="item.type === 'file'" :color="item.disabled?'gray':'red'">mdi-file-pdf</v-icon>
                          <v-icon v-else-if="item.type === 'link'" :color="item.disabled?'gray':'blue'">mdi-open-in-new</v-icon>
                          <v-simple-checkbox color="success" v-model="item.check" v-else></v-simple-checkbox>
                        </template>
                      </v-treeview>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col class="d-flex text-center" style="justify-content: center">
                      <div class="title grey--text text--lighten-1 font-weight-light" style="align-self: center">
                        Selecione para ver detalhes
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
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
    <v-dialog v-model="dialog" max-width="400">
      <login @close="dialog = false"></login>
    </v-dialog>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'
  import EmptyProfileCard from '@/components/EmptyProfileCard'

  let id = 0;

  export default Vue.extend({
    name: 'Home',
    components: {
      EmptyProfileCard
    },
    data: () => ({
      dialog: false,
      items: [
        {
          id: id++,
          name: 'Complete seu cadastro',
          type: 'topic',
          check: false,
          children: [
            {
              id: id++,
              name: 'Editar perfil da empresa',
              type: 'link'
            },
            {
              id: id++,
              name: 'Editar contato da empresa',
              type: 'link'
            }
          ]
        }, {
          id: id++,
          name: 'Torne-se mais competitivo',
          type: 'topic',
          check: false
        }, {
          id: id++,
          name: 'Aproxime-se das tradings',
          type: 'topic',
          check: false,
          children: [
            {
              id: id++,
              name: 'Ver calendário de eventos',
              type: 'link'
            }
          ]
        },{
          id: id++,
          name: 'Participe dos nossos projetos',
          type: 'topic',
          check: false
        },{
          id: id++,
          name: 'Receba estudos exclusivos',
          type: 'topic',
          check: false,
          children: [
            {
              id: id++,
              name: 'Análise de Mercado',
              type: 'file',
              disabled: true
            }
          ]
        }
      ]
    }),
  })
</script>
