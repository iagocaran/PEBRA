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
          <v-col offset-xl="1" xl="2" offset="0" cols="3">
            <profile-card></profile-card>
          </v-col>
          <v-col xl="8" cols="9" class="pa-0">
            <v-row>
              <v-col cols="12" class="pb-0">
                <v-bottom-navigation class="justify-space-around">
                  <v-btn>
                    <span>Meu caminho</span>
                    <v-icon>mdi-road-variant</v-icon>
                  </v-btn>
                  <v-btn>
                    <span>Noticias</span>
                    <v-icon>mdi-newspaper</v-icon>
                  </v-btn>
                  <v-btn>
                    <span>Eventos</span>
                    <v-icon>mdi-calendar</v-icon>
                  </v-btn>
                  <v-btn>
                    <span>Análises</span>
                    <v-icon>mdi-chart-line</v-icon>
                  </v-btn>
                  <v-btn>
                    <span>Consórcio</span>
                    <v-icon>mdi-account-group</v-icon>
                  </v-btn>
                  <v-btn>
                    <span>Meu negócio</span>
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </v-bottom-navigation>
              </v-col>
              <v-col>
                <v-card raised>
                  <v-card-title class="headline"><b>Meu Caminho Exportador</b></v-card-title>
                  <v-row justify="space-between" class="pa-4 pt-0 pb-6">
                    <v-col cols="5">
                      <v-treeview dense
                                  :items="items"
                                  :active.sync="active"
                                  :open.sync="open"
                                  activatable
                                  open-on-click
                                  transition>
                        <template v-slot:prepend="{ item }">
                          <v-icon v-if="item.type === 'file'" :color="item.disabled?'gray':'red'">mdi-file-pdf</v-icon>
                          <v-icon v-else-if="item.type === 'link'" :color="item.disabled?'gray':'blue'">mdi-open-in-new</v-icon>
                          <v-simple-checkbox color="success" v-model="item.check" v-else></v-simple-checkbox>
                        </template>
                      </v-treeview>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col class="d-flex text-center" style="justify-content: center">
                      <div
                        v-if="!selected"
                        class="title grey--text text--lighten-1 font-weight-light"
                        style="align-self: center">
                        Selecione para ver detalhes
                      </div>
                      <div v-else>
                        <div v-html="selected.content" class="text-justify"></div>
                        <v-btn @click="advance" color="primary" block>Continuar</v-btn>
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
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ProfileCard from '@/components/ProfileCard.vue'

  let id = 0;

  export default Vue.extend({
    name: 'Home',
    components: {
      ProfileCard
    },
    data: () => ({
      dialog: false,
      active: [12],
      open: [11],
      items: [
        {
          id: id++,
          name: 'Conhecendo a plataforma',
          type: 'topic',
          check: true,
          children: [
            {
              id: id++,
              name: 'Acessando a aba de notícias',
              type: 'topic',
              check: true,
              content: '<p>Morbi bibendum leo a neque eleifend ultrices. Integer laoreet quam est, vitae commodo velit lobortis vitae. Duis leo nulla, ultrices nec dui sed, molestie porttitor justo. Proin malesuada velit erat, mattis molestie ipsum ornare a. Praesent porta rhoncus risus, eget congue dui venenatis eget. Pellentesque ut mauris gravida lectus viverra faucibus. Fusce sit amet malesuada turpis, vel suscipit eros. Praesent aliquam consectetur eros vitae varius. Suspendisse potenti. Aenean eleifend lacinia massa. Sed molestie non turpis posuere blandit. </p>' +
                '<p>Suspendisse potenti. Nam a libero eget felis malesuada lacinia. Vivamus ullamcorper est quis libero egestas, nec cursus erat blandit. Sed mi mauris, pharetra sed neque et, molestie scelerisque enim. Fusce scelerisque ornare tincidunt. Etiam placerat leo sit amet vehicula fermentum. In ultrices volutpat finibus. Duis a nulla nisl. </p>' +
                '<p>Pellentesque eget diam id quam dignissim condimentum sed eget orci. Donec aliquam augue vehicula est venenatis porta. Aenean dictum arcu nec arcu malesuada, ut pretium odio congue. Curabitur sapien dui, aliquet sit amet enim sed, vulputate euismod mi. Morbi porttitor mauris tortor, a vulputate quam ultrices eget. Pellentesque sed justo ut quam hendrerit molestie vitae et nulla. Phasellus sit amet ligula ex. </p>'
            }, {
              id: id++,
              name: 'Acessando a aba de eventos',
              type: 'topic',
              check: true,
              content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat eros eu tincidunt viverra. Sed vulputate convallis ipsum vitae semper. Proin luctus vehicula leo, vitae consequat eros commodo id. Praesent sit amet ipsum urna. Aenean aliquet, nunc eu accumsan hendrerit, augue turpis iaculis erat, non interdum arcu arcu ac eros. Nullam sit amet suscipit quam. Quisque molestie tristique ex a scelerisque. Nunc sit amet nisi erat. Vestibulum nec nisl nisi. Morbi scelerisque sapien dictum placerat pharetra. Aliquam interdum sem vitae mi consequat tempus. Aliquam rhoncus tempor eros, sed ultricies felis maximus nec. Aenean laoreet commodo faucibus. Duis dui magna, laoreet congue laoreet id, porttitor eget ante. </p>' +
                '<p>Nunc nec tempus dolor. Vestibulum auctor lacus non lectus blandit accumsan. Donec at urna sed arcu faucibus faucibus malesuada non lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse pulvinar tincidunt leo, vel posuere metus vulputate sed. Praesent blandit, dolor et vulputate vestibulum, risus libero porttitor quam, ac lacinia nunc mi sed neque. Vivamus pretium a augue at finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent consectetur quam ac nisl mattis lacinia. Morbi sit amet justo sed justo finibus pharetra. Sed tempus nibh sed mi porta molestie. Fusce pretium nibh magna, a rhoncus mauris condimentum ut. Integer accumsan varius ante. Quisque iaculis, neque eget posuere feugiat, arcu orci accumsan ipsum, rutrum rhoncus massa magna non ipsum. Aenean quis mi mattis, ornare odio in, pellentesque nulla.</p>'
            }, {
              id: id++,
              name: 'Acessando a aba análise de negócios',
              type: 'topic',
              check: true,
              content: '<p>Nullam ornare quis quam condimentum gravida. Sed ac augue ac diam dapibus vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id fringilla sem. Ut non mi libero. Morbi vel lorem est. Nam pulvinar, nibh non sollicitudin gravida, sem odio blandit libero, vel placerat elit enim sed orci. Aliquam rutrum risus eget magna elementum ullamcorper. </p>' +
                '<p>Fusce ac dignissim ante, imperdiet egestas turpis. Duis at faucibus tellus. Donec tortor dolor, suscipit non finibus sed, tempus eu leo. Praesent iaculis ultricies metus, vitae commodo mi luctus id. Pellentesque tempor, mauris eu finibus finibus, odio est dapibus urna, ut tempus dui tortor mattis nisl. Aliquam erat volutpat. Etiam congue convallis egestas. Praesent in tincidunt ante. Nam elementum ante vitae ipsum molestie suscipit. Pellentesque consectetur nibh nec purus feugiat, at varius mi imperdiet. Vivamus non facilisis sem. </p>' +
                '<p>Praesent tincidunt enim neque, dictum elementum odio suscipit in. Phasellus commodo placerat augue, eget bibendum diam lacinia tempor. Fusce convallis elit ac aliquam semper. Sed laoreet tincidunt urna. Cras lectus quam, sagittis molestie leo at, lacinia sagittis sapien. Nulla eget efficitur lacus. Phasellus ornare metus eget ligula mattis, sed elementum orci malesuada. </p>'
            }, {
              id: id++,
              name: 'Cadastro no portal SISCOMEX',
              type: 'topic',
              check: true
            }, {
              id: id++,
              name: 'Providenciando o Radar do seu empreendimento',
              type: 'topic',
              check: true
            }
          ]
        }, {
          id: id++,
          name: 'Dados da sua empresa',
          type: 'topic',
          check: true,
          children: [
            {
              id: id++,
              name: 'Adicionar suas categorias de produtos',
              type: 'topic',
              check: true
            }, {
              id: id++,
              name: 'Cadastrar um responsável',
              type: 'topic',
              check: true
            }, {
              id: id++,
              name: 'Registrar a localização da empresa',
              type: 'topic',
              check: true
            }, {
              id: id++,
              name: 'Indicar o tipo e tamanho da empresa',
              type: 'topic',
              check: true
            }
          ]
        }, {
          id: id++,
          name: 'Informações',
          type: 'topic',
          check: false,
          children: [
            {
              id: id++,
              name: 'Capacitação em comércio exterior',
              type: 'topic',
              check: false,
              content: '<p>O processo de exportação pode gerar inúmeras dúvidas ao longo do caminho para uma empresa iniciante. Desafios, formulários, leis, cálculos de preços, entre outros. Sendo assim, a Agência Brasileira de Promoção de Exportações e Investimentos (Apex-Brasil) desenvolveu um programa de capacitação em comércio exterior.</p>' +
                '<p>O Programa é implementado em todas regiões do país, por meio de parcerias da Apex-Brasil com instituições de ensino (Universidades, Parques Tecnológicos ou Fundações de Amparo à Pesquisa) ou Federações de Indústria. Chamadas de entidades executoras do programa, elas são responsáveis pela aplicação da metodologia do PEIEX na qualificação de empresas.</p>' +
                '<p>Para solicitar, você poderá justamente se cadastrar pelo link do formulário abaixo e o mais interessante é que a empresa não precisa pagar pelo atendimento, mas deve estar disposta a dedicar tempo e investir na melhoria do seu processo. Ao final do atendimento, que dura aproximadamente 38 horas, a empresa recebe um plano de exportação para orientar a sua inserção internacional. </p>' +
                '<p>Veja no vídeo abaixo tudo sobre como o programa PEIEX funciona e como o processo de cadastro é realizado.</p>' +
                '<img src="' + require('@/assets/topics/thumbnail.jpg') + '" style="width:100%"></img>'
            }, {
              id: id++,
              name: 'Como analisar uma oportunidade?',
              type: 'file',
              check: false,
              content: '<p>Etiam volutpat laoreet mollis. Proin imperdiet condimentum accumsan. Sed nec dolor suscipit, dictum felis vitae, auctor est. Duis malesuada felis vitae magna rhoncus gravida. Duis et nisl eget mi tempor blandit. Phasellus lobortis finibus dolor vel volutpat. Ut varius congue augue vel iaculis. Pellentesque interdum, elit quis efficitur tempor, enim dui bibendum tortor, convallis gravida mauris urna et velit. Curabitur lobortis velit sed nisi finibus, eget fringilla lacus aliquam. Sed ut hendrerit augue. Sed malesuada facilisis ex, at pellentesque erat blandit sed. </p>' +
                '<img src="' + require('@/assets/topics/thumbnail2.jpg') + '" style="width:100%"></img>' +
                '<button class="v-btn v-btn--block v-btn--contained theme--dark v-size--default v-btn--contained red mb-2">' +
                '<span class="v-btn__content">Baixar conteúdo</span></button>'
            }, {
              id: id++,
              name: 'Como verificar quais são meus concorrentes?',
              type: 'topic',
              check: false
            }, {
              id: id++,
              name: 'Aprendendo a verificar as leis internacionais',
              type: 'topic',
              check: false,
              content: '<p>Além de você conhecer as leis brasileiras, é necessário conhecer as leis estrangeiras! Seja na maneira de fazer o produto, seja na hora de embalar, com quais materiais por exemplo. Por isso, você deve se perguntar: O produto que já faço no Brasil, serve para fora? \n' +
                'Por exemplo, para exportar produtos alimentícios, é necessário que haja o conteúdo nutricional na embalagem. Além disso, é necessário dizer se tem Glutem, Lactose ou outros agentes que podem fazer mal.\n' +
                'Mas primeiro se pergunte: Quem é meu público alvo? Para então começar a procurar sobre as leis daquele país.</p>'
            }, {
              id: id++,
              name: 'Calculando os preços do mercado interno e externo',
              type: 'topic',
              check: false
            }, {
              id: id++,
              name: 'Encontrando um consórcio de exportação',
              type: 'topic',
              check: false
            }, {
              id: id++,
              name: 'Outros tutoriais que a gente pode encaixar...',
              type: 'topic',
              check: false
            }
          ]
        }
      ]
    }),
    methods: {
      advance () {
        this.selected.check = true
        this.active = [this.active[0] + 1]
      }
    },
    computed: {
      selected () {
        if (!this.active.length) return undefined
        const id = this.active[0]
        for (let i = 0; i < this.items.length; i++) {
          const item = this.items[i]
          if (item.id === id) {
            return item
          } else {
            for (let j = 0; j < item.children.length; j++) {
              const subItem = item.children[j]
              if (subItem.id === id) {
                return subItem
              }
            }
          }
        }
        return undefined
      }
    }
  })
</script>
