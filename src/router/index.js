import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '@/views/Welcome.vue';
import Home from '@/views/Home.vue';
import News from '@/views/News.vue';
import Moods from '@/views/Moods.vue';
import Wall from '@/views/Wallpapers.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redierct: '/welcome' },
  { path: '/welcome', component: Welcome },
  { path: '/home', component: Home },
  { path: '/news', component: News },
  { path: '/moods', component: Moods },
  { path: '/wall', component: Wall },
];

const router = new VueRouter({
  routes,
});

export default router;
