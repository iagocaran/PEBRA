<template>
  <router-view></router-view>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'App'
});
</script>

<style scoped>
  .theme--light.v-application {
    background: #F0F0F0 !important;
  }
</style>