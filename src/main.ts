import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import { makeServer } from './server'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

if (process.env.NODE_ENV === 'development') makeServer()

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
