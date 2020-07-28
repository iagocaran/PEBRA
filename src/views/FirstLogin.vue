<template>
  <v-app page="centered">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="5">
          <v-card>
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title><b>PEBra</b></v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <p>
                Para te colocar no caminho certo, precisamos de apenas três informações:
              </p>
              <v-form v-model="valid">
                <v-text-field
                  label="Nome da Empresa"
                  name="company"
                  v-model="data.company"
                  prepend-icon="mdi-office-building"
                  type="text"
                  :rules="companyRules"
                ></v-text-field>
                <v-text-field
                  label="CNPJ"
                  name="cnpj"
                  v-model="data.document"
                  prepend-icon="mdi-card-text"
                  type="text"
                  :rules="cnpjRules"
                ></v-text-field>
                <v-autocomplete
                  label="Selecione alguns de seus produtos"
                  prepend-icon="mdi-cart"
                  :items="items"
                  v-model="data.products"
                  multiple
                ></v-autocomplete>
                <v-btn color="primary" @click="save" :disabled="!valid">Continuar</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: 'Home',
    data () {
      return {
        items: [
          { text: 'Animais vivos', value: '01' },
          { text: 'Cavalos, asininos e muares, vivos', value: '0101' },
          { text: 'Cavalos', value: '01012' },
          { text: 'Animais vivos da espécie bovina', value: '0102' },
          { text: 'Bovinos domésticos', value: '01022' },
          { text: 'Animais vivos da espécie suína', value: '0103' },
          { text: 'Aves da espécie Gallus domesticus, patos, gansos, perus, peruas e galinhas-d\'angola, das espécies domésticas vivos', value: '' },
          { text: 'Peruas e perus', value: '01051200' },
          { text: 'Patos', value: '01051300' },
          { text: 'Gansos', value: '01051400' },
          { text: 'Galinhas-d\'angola', value: '01051500' },
          { text: 'Leite e laticínios, ovos de aves, mel natural, produtos comestíveis de origem animal', value: '04' },
          { text: 'Leite UHT', value: '04011010' },
          { text: 'Creme de leite', value: '0401402' },
          { text: 'Iogurte', value: '04031000' },
          { text: 'Manteiga', value: '04051000' },
          { text: 'Mel natural', value: '04090000' },
          { text: 'Bebidas, líquidos alcóolicos e vinagres', value: '22' },
          { text: 'Cerveja sem álcool', value: '22029100' },
          { text: 'Cervejas de malte', value: '22030000' },
          { text: 'Vinhos', value: '2204221' },
          { text: 'Aguardente', value: '22072020' }
        ],
        data: {
          products: [],
          document: '',
          company: ''
        },
        valid: false,
        companyRules: [
          v => !!v || 'Digite o nome da empresa'
        ],
        cnpjRules: [
          v => !!v || 'Digite seu CNPJ',
          v => /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2}/.test(v) || 'O CNPJ precisa ser válido',
        ]
      }
    },
    methods: {
      save () {
        this.$store.commit('updateUser', Object.assign(this.data, { firstAccess: true }))
        this.$router.push({ name: 'UserHome' })
      }
    }
  })
</script>

<style scoped>

</style>