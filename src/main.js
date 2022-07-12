import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/common.css';
import '@/assets/css/media.css';
import './element.js';
// import '../public/js/rem';
import axios from 'axios';
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
