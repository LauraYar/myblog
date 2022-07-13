<template>
  <div class="fdmusic">
    <div class="fd-main">
      <Swiper></Swiper>
      <IconList></IconList>
      <MusicList></MusicList>
    </div>
  </div>
</template>

<script>
import Swiper from './music/Swiper.vue';
import IconList from './music/IconList.vue';
import MusicList from './music/MusicList.vue';
export default {
  components: {
    Swiper,
    IconList,
    MusicList,
  },
};
</script>

<style scoped lang="less">
.fdmusic {
  width: 100%;
  .fd-main {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
