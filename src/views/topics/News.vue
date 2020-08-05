<template>
  <div>
    <v-card raised class="mb-2">
      <v-card-title class="headline"><b>Notícias</b></v-card-title>
      <v-list-item>
        <v-list-item-content>
          Mostrando conteúdo relacionado à Apicultura, Minas Gerais e Pequenas Empresas.
          <v-btn color="primary" text style="flex:initial">Expandir resultados</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card raised class="mb-2">
      <v-list-item three-line>
        <v-list-item-avatar
          tile
          size="150"
        >
          <v-img :src="require('@/assets/topics/news01.jpg')"></v-img>
        </v-list-item-avatar>
        <v-list-item-content class="d-block">
          <v-list-item-title class="headline mb-0">
            Fruto de trabalho secular, mel gaúcho é líder no Brasil
          </v-list-item-title>
          <div class="caption mb-2">06/04/2020</div>
          <v-list-item-subtitle class="mb-3">
            Apicultura do Rio Grande do Sul lidera a produção nacional de mel, com cerca de 8 mil toneladas anuais
          </v-list-item-subtitle>
          <v-btn color="primary" text class="pa-0">Ler mais</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card raised class="mb-2">
      <v-list-item three-line>
        <v-list-item-avatar
          tile
          size="150"
        >
          <v-img :src="require('@/assets/topics/news02.jpg')"></v-img>
        </v-list-item-avatar>
        <v-list-item-content class="d-block">
          <v-list-item-title class="headline mb-0">
            Mel brasileiro no topo
          </v-list-item-title>
          <div class="caption mb-2">13/09/2019</div>
          <v-list-item-subtitle class="mb-3">
            Com profissionalização e cuidados com meio ambiente é possível aumentar a produção nacional
          </v-list-item-subtitle>
          <v-btn color="primary" text class="pa-0">Ler mais</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card raised class="mb-2">
      <v-list-item three-line>
        <v-list-item-avatar
          tile
          size="150"
        >
          <v-img :src="require('@/assets/topics/news03.jpg')"></v-img>
        </v-list-item-avatar>
        <v-list-item-content class="d-block">
          <v-list-item-title class="headline mb-0">
            Embrapa oferece curso pela internet sobre criação de abelhas sem ferrão
          </v-list-item-title>
          <div class="caption mb-2">13/09/2019</div>
          <v-list-item-subtitle class="mb-3">
            A Empresa Brasileira de Pesquisa Agropecuária (Embrapa) oferece um curso pela internet para quem tem vontade de aprender sobre criação de abelhas sem ferrão. Ele é feito em conjunto com a Associação Brasileira de Estudos de Abelhas.
          </v-list-item-subtitle>
          <v-btn color="primary" text class="pa-0">Ler mais</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card raised class="mb-2">
      <v-list-item three-line>
        <v-list-item-avatar
          tile
          size="150"
        >
          <v-img :src="require('@/assets/topics/news04.jpg')"></v-img>
        </v-list-item-avatar>
        <v-list-item-content class="d-block">
          <v-list-item-title class="headline mb-0">
            Indústria de produtos à base de mel, própolis e pólen anuncia mudança na marca, novas embalagens e lança linha voltada para atletas
          </v-list-item-title>
          <div class="caption mb-2">16/08/2020</div>
          <v-list-item-subtitle class="mb-3">
            As novidades fazem parte da estratégia de reposicionamento da indústria de produtos das abelhas, que pretende estar em todo o território nacional até o fim de 2020.
          </v-list-item-subtitle>
          <v-btn color="primary" text class="pa-0">Ler mais</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-btn block>Carregar mais</v-btn>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'News',
    data: () => ({}),
    methods: {
    }
  })
</script>
