<template>
  <v-app>
    <v-app-bar app dark flat>
      <v-toolbar-title>
        <v-img
          alt="PEBra Logo"
          contain
          :src="require('@/assets/home/PEBraLogo.png')"
          width="140"
        />
      </v-toolbar-title>

      <v-spacer></v-spacer>

<!-- TODO: Configure viewport -->
      <v-btn text>Início</v-btn>
      <v-btn text>Benefícios</v-btn>
      <v-btn text>Recursos</v-btn>
      <v-btn text>Clientes</v-btn>
      <v-btn text>Contato</v-btn>
      <v-btn outlined rounded style="border-color: #28a745; border-width: 3px;">Acessar</v-btn>
      <v-app-bar-nav-icon v-if="false"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content class="pt-0" style="background-color:#e9ecef">
      <div class="landing fixed-background" :style="{ backgroundImage: 'url(' + require('@/assets/home/porto.png') + ')' }">
        <div class="caption text-center">
          <h1>Bem vindo à PEBra</h1>
          <h3>Porque exportar é para todos</h3>
          <v-btn x-large outlined tile dark style="border-width: 3px;font-family: 'Lato', sans-serif;">Começar!</v-btn>
        </div>
      </div>

      <v-container class="pt-12" style="max-width: 75%; padding-bottom:96px; color:rgb(80, 89, 98);">
        <div class="text-center heading mt-12 mb-12">
          <h1>Benefícios</h1>
        </div>
        <v-row pb-12>
          <v-col class="text-center">
            <v-icon size="50" class="mb-5" style="color:#00A000">mdi-information-variant</v-icon>
            <h3 class="mb-5">Informação</h3>
            <p>Você ganha tempo ao achar a informação diretamente, sem precisar procurar em diversos locais</p>
          </v-col>
          <v-col class="text-center">
            <v-icon size="50" class="mb-5" style="color:#00A000">mdi-format-list-checkbox</v-icon>
            <h3 class="mb-5">Autonomia</h3>
            <p>Com o <b>Meu Caminho Exportador</b>, você consegue caminhar por conta própria e agilizar o seu processo</p>
          </v-col>
          <v-col class="text-center">
            <v-icon size="50" class="mb-5" style="color:#00a000">mdi-file-document-edit-outline</v-icon>
            <h3 class="mb-5">Experiência</h3>
            <p>Analisando suas necessidades, podemos preparar exatamente o que você precisa.</p>
          </v-col>
        </v-row>
      </v-container>

      <v-container
        fluid
        class="fixed-background"
        :style="{
          backgroundImage: 'url(' + require('@/assets/home/acordo.png') + ')',
          padding: '96px 50px 108px 50px',
          color: 'white !important',
          position: 'relative',
          zIndex: '0' }"
      >
        <div class="layer">
        </div>
        <div class="text-center heading mt-12 mb-12">
          <h1 style="color: white">Recursos</h1>
        </div>
        <v-row style="fontSize:1.25rem">
          <v-col class="text-center">
            <h2 class="mb-5">Estudos de Mercado</h2>
            <v-icon size="50" class="mb-5" style="color:#00A000">mdi-chart-line</v-icon>
            <p>Você sabe como seu setor está na economia e como reagir</p>
          </v-col>
          <v-col class="text-center">
            <h2 class="mb-5">Países importadores</h2>
            <v-icon size="50" class="mb-5" style="color:#00A000">mdi-routes</v-icon>
            <p>Você sabe pra qual paises você consegue exportar e conhecer melhor seu público alvo</p>
          </v-col>
          <v-col class="text-center">
            <h2 class="mb-5">Notícias</h2>
            <v-icon size="50" class="mb-5" style="color:#00A000">mdi-newspaper</v-icon>
            <p>Reunimos notícias sobre seu ramo de mercado: normas, eventos, conferências, entre outros</p>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="pt-12" style="padding-bottom:96px; color:rgb(80, 89, 98);">
        <div class="text-center heading mt-12 mb-12">
          <h1>Clientes</h1>
        </div>
        <v-row pb-12>
          <v-col md="6">
            <v-row>
              <v-col sm="4" align="center">
                <v-img
                  alt="PEBra Logo"
                  class="client-img"
                  :src="require('@/assets/home/bartender.jpg')"
                  width="100%"
                  style="border-radius: 50%"
                />
              </v-col>
              <v-col sm="8">
                <blockquote class="blockquote pa-0">
                  <v-icon class="ma-4" style="vertical-align: bottom" color="#00A000">mdi-format-quote-open</v-icon>
                  Antes eu não conseguia achar informação de qualidade tão fácil, eu tinha que procurar bastante. Com a PEBra eu consegui mais tempo para melhorar meu negócio.
                </blockquote>
                <v-divider class="my-4" style="border-color:#00A000"></v-divider>
                <cite>&#8212; Eric, vendedor de Cachaça Artesanal</cite>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="6">
            <v-row>
              <v-col sm="4" align="center">
                <v-img
                  alt="PEBra Logo"
                  class="client-img"
                  :src="require('@/assets/home/apicultora.jpg')"
                  width="100%"
                  style="border-radius: 50%"
                />
              </v-col>
              <v-col sm="8">
                <blockquote class="blockquote pa-0">
                  <v-icon class="ma-4" style="vertical-align: bottom" color="#00A000">mdi-format-quote-open</v-icon>
                  Consegui ter a oportunidade de exportar pela primeira vez com a PEBra. Encontrei parceiros e oportunidades que eu nunca pensei que teria.
                </blockquote>
                <v-divider class="my-4" style="border-color:#00A000"></v-divider>
                <cite>&#8212; Ana, Apicultora </cite>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="text-center py-12" style="background-color:#FFF; color:rgb(80, 89, 98);">
        <p class="mb-10" style="font-size: 1.25rem">Quer saber mais?</p>
        <v-btn x-large class="text-uppercase btn-secondary mb-4">Acesse a nossa plataforma</v-btn>
      </v-container>
    </v-content>

    <v-footer dark style="background-color: #40474e" padless>
      <v-container fluid class="pa-0 pt-6">
        <v-row justify="center">
          <v-col class="text-center" md="5">
            <div class="pa-6" align="center">
              <v-img
                alt="PEBra Logo"
                contain
                :src="require('@/assets/home/PEBraLogo.png')"
                width="100"
              />
            </div>
            <p>Caso tenha dúvidas ou sugestões de como podemos melhorar nosso serviço, não evite de nos contactar</p>
            <strong>Contato</strong>
            <p>(+55) 61 3314-1414<br>contato@pebra.com.br</p>
            <a href="" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="" target="_blank"><i class="fab fa-twitter-square"></i></a>
            <a href="" target="_blank"><i class="fab fa-instagram"></i></a>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-divider style="border-width: 2px"></v-divider>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center pb-6">
            © 2020 - PEBra
          </v-col>
        </v-row>
      </v-container>
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
      dialog: false
    })
  })
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');

  body {
    color: #505962;
  }

  .v-app-bar {
    position: fixed;
    top: 0;
    left: 0;
    letter-spacing: .1rem;
    background: rgba(0, 0, 0, 0.6) !important;
  }

  .v-app-bar .v-btn {

    font-weight: 700 !important;
    font-size: .9rem !important;
    font-family: 'Lato Semibold', sans-serif !important;
  }

  .landing {
    position: relative;
    height: 100vh;
  }
  .fixed-background {
    background-position: 50% 50%;
    background-attachment: fixed;
    background-size: cover;
  }
  .caption {
    width: 100%;
    max-width: 100%;
    position: absolute;
    top: 38%;
    color: white;
    font-family: 'Lato', sans-serif;
  }
  .caption h1 {
    font-size: 3.8rem;
    font-weight: 700;
    letter-spacing: .3rem;
    text-shadow: .1rem .1rem .8rem black;
    margin-bottom: .5rem;
    font-family: 'Lato', sans-serif;
    line-height: 1.2;
  }
  .caption h3 {
    font-size: 2rem;
    font-weight: 500;
    text-shadow: .1rem .1rem .5rem black;
    padding-bottom: 1.6rem;
    line-height: 1.2;
    margin-bottom: .5rem;
  }

  .heading::after {
    content: " ";
    display: block;
    width: 3rem;
    height: .2rem;
    background-color: #00A000;
    margin: 0 auto 2rem;
    margin-bottom: 1.9rem;
  }

  h1, h3 {
    text-transform: uppercase;
  }

  h2 {
    font-weight: 500;
  }

  .layer {
    background-color: rgba(0, 0, 0, 0.75);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  * {
    font-family: 'Lato', sans-serif;
  }

  blockquote, cite {
    font-size: 1rem !important;
  }

  .btn-secondary {
    color: white;
    font-size: 1.2rem;
    background-color: #00A000 !important;
    border-color: #00A000 !important;
  }
  .btn-secondary:hover{
    background-color: #006000 !important;
    border-color: #006000 !important;
  }

  @media only screen and (max-width: 600px) {
    .caption h1{
      font-size: 2.3rem !important;
      letter-spacing: .15rem;
      padding-bottom: .5rem;
    }
    .caption h3{
      font-size: 1.2rem;
      padding-bottom: 1.2rem;
    }

    .client-img {
      max-width: 50%;
    }
  }
  @media only screen and (max-width: 960px) {
    .client-img {
      max-width: 80%;
    }
  }
</style>
