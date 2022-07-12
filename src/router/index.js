import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '@/views/Welcome.vue';
import Home from '@/views/Home.vue';
import News from '@/views/News.vue';
import Moods from '@/views/Moods.vue';
import Wall from '@/views/Wallpapers.vue';
import Music from '@/views/Music.vue';
import Fdmusic from '@/components/Fdmusic.vue';
import Fosmusic from '@/components/Fosmusic.vue';
import Favmusic from '@/components/Favmusic.vue';
import Spacemusic from '@/components/Spacemusic.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redierct: '/welcome' },
  { path: '/welcome', component: Welcome },
  { path: '/home', component: Home },
  { path: '/news', component: News },
  { path: '/moods', component: Moods },
  { path: '/wall', component: Wall },
  {
    path: '/music',
    component: Music,
    redirect: '/fdmusic',
    children: [
      { path: '/fdmusic', component: Fdmusic },
      { path: '/fosmusic', component: Fosmusic },
      { path: '/favmusic', component: Favmusic },
      { path: '/Spacemusic', component: Spacemusic },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
