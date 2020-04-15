import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$vuetify = vuetify;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
