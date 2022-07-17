import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '@/views/Home.vue';
// import News from '@/views/News.vue';
// import Moods from '@/views/Moods.vue';
// import Wall from '@/views/Wallpapers.vue';
// import Music from '@/views/Music.vue';
// import Fdmusic from '@/components/Fdmusic.vue';
// import Fosmusic from '@/components/Fosmusic.vue';
// import Favmusic from '@/components/Favmusic.vue';
// import Spacemusic from '@/components/Spacemusic.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
  },
  { path: '/home', component: () => import('@/views/Home.vue') },
  { path: '/news', component: () => import('@/views/News.vue') },
  { path: '/moods', component: () => import('@/views/Moods.vue') },
  { path: '/wall', component: () => import('@/views/Wallpapers.vue') },
  {
    path: '/music',
    component: () => import('@/views/Music.vue'),
    redirect: '/fdmusic',
    children: [
      { path: '/fdmusic', component: () => import('@/components/Fdmusic.vue') },
      {
        path: '/fosmusic',
        component: () => import('@/components/Fosmusic.vue'),
      },
      {
        path: '/favmusic',
        component: () => import('@/components/Favmusic.vue'),
      },
      {
        path: '/Spacemusic',
        component: () => import('@/components/Spacemusic.vue'),
      },
      { path: '/itemMusic', component: () => import('@/components/ItemMusic') },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
