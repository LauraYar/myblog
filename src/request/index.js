// 封装Ajax请求
import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$http = axios;
// 配置请求的根路径
axios.defaults.baseURL = 'http://localhost:3000/';
// 获取首页轮播图的数据
