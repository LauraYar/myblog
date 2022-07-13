import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/common.css';
import '@/assets/css/media.css';
import './element.js';
// import '../public/js/rem';
// 引入阿里图表库
import '@/assets/font/iconfont.css';
// import '@/assets/font/iconfont.js';
// 引入单独的axios文件
// import '@/request/index.js';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
