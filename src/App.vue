<template>
  <router-view></router-view>
</template>

<script>
import Vue from 'vue';
// import Login from '@/components/Login'

export default Vue.extend({
  name: 'App',

  components: {
      // Login
  },

  data: () => ({
    dialog: false
  }),
});
</script>

<style scoped>
  .theme--light.v-application {
    background: #EBEBEB !important;
  }
</style>