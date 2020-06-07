<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <v-img
        alt="PEBra Logo"
        class="shrink mt-1"
        contain
        min-width="100"
        :src="require('@/assets/pebra.png')"
        width="150"
      />

      <v-spacer></v-spacer>

      <v-btn text><v-icon color="light-blue darken-3">mdi-sitemap</v-icon></v-btn>
      <v-btn text><v-icon color="light-blue darken-3">mdi-format-font-size-decrease</v-icon></v-btn>
      <v-btn text><v-icon color="light-blue darken-3">mdi-format-font-size-increase</v-icon></v-btn>
      <v-btn text><v-icon color="light-blue darken-3">mdi-contrast-circle</v-icon></v-btn>
      <v-btn text @click="dialog = true"><span class="light-blue--text text--darken-3">Entrar</span></v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="pt-0">
        <v-row>
          <v-col cols="8" class="ma-0 pa-0">
            <v-row class="text-center">
              <v-col cols="12">
                <v-card raised class="mb-3">
                  <div class="d-flex flex-no-wrap">
                    <v-avatar size="150" tile>
                      <v-img src="@/assets/apex-icon.png"></v-img>
                    </v-avatar>
                    <div>
                      <v-card-title class="text-uppercase">Bem vindos à PEBra</v-card-title>
                      <v-card-text>Estamos aqui para ajudá-lo a iniciar sua vida em exportação!</v-card-text>
                    </div>
                  </div>
                </v-card>
                <v-card raised class="mb-3">
                  <v-card-actions>
                    <v-btn text>
                      <v-icon color="light-blue darken-3">mdi-briefcase</v-icon><br/>
                      Meu Negócio
                    </v-btn>
                    <v-btn text>
                      <v-icon color="light-blue darken-3">mdi-cog</v-icon>
                      Ferramentas
                    </v-btn>
                    <v-btn text>
                      <v-icon color="light-blue darken-3">mdi-calendar</v-icon>
                      Eventos
                    </v-btn>
                    <v-btn text>
                      <v-icon color="light-blue darken-3">mdi-chart-line</v-icon>
                      Estudos
                    </v-btn>
                    <v-btn text>
                      <v-icon color="light-blue darken-3">mdi-account-group</v-icon>
                      Contato
                    </v-btn>
                    <v-btn text>
                      <v-icon color="light-blue darken-3">mdi-account</v-icon>
                      Perfil
                    </v-btn>
                  </v-card-actions>
                </v-card>
                <v-card raised class="mb-3">
                  <!-- TODO: Setup subnavigation -->
                  <v-card-title>Meu negócio</v-card-title>
                  <v-card-text>
                    Entre no sistema e aproveite todas as ferramentas que preparamos para você!
                  </v-card-text>
                  <v-card-actions>
                    <v-btn  @click="dialog = true" outlined block>
                      Entrar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-card raised>
              <v-card-title>Meu Caminho Exportador</v-card-title>
              <v-card-text>
                Todo o auxílio para alcançar os mercados mais distantes.<br />
                Faça parte desse ecossistema!
              </v-card-text>
              <v-card-actions>
                <v-btn outlined block>
                  Entrar
                </v-btn>
              </v-card-actions>
            </v-card>
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
  import Login from '@/components/Login'

  export default Vue.extend({
    name: 'Home',
    components: {
      Login
    },
    data: () => ({
      dialog: false,
      items: [
        {
          id: 1,
          name: 'Qualifique sua empresa',
          type: 'topic',
          check: true
        }, {
          id: 2,
          name: 'Torne-se mais competitivo',
          type: 'topic',
          check: true
        }, {
          id: 3,
          name: 'Aproxime-se das tradings',
          type: 'topic',
          check: true,
          children: [
            {
              id: 7,
              name: 'Ver calendário de eventos',
              type: 'link'
            }
          ]
        },{
          id: 4,
          name: 'Participe dos nossos projetos',
          type: 'topic',
          check: false
        },{
          id: 5,
          name: 'Receba estudos exclusivos',
          type: 'topic',
          check: true,
          children: [
            {
              id: 6,
              name: 'Análise de Mercado',
              type: 'file'
            }
          ]
        }
      ]
    })
  })
</script>
