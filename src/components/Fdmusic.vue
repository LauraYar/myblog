<template>
  <div class="fdmusic">
    <div class="fd-header">
      <div class="header-lun"><Swiper></Swiper></div>
    </div>
    <div class="fd-main">
      <FdIconList></FdIconList>
      <FdmuList></FdmuList>
      <MusicList></MusicList>
    </div>
  </div>
</template>

<script>
import Swiper from './music/Swiper.vue';
import FdIconList from './music/FdIconList.vue';
import FdmuList from './music/FdMuList.vue';
import MusicList from './music/MusicList.vue';
export default {
  components: {
    Swiper,
    FdIconList,
    FdmuList,
    MusicList,
  },
};
</script>

<style scoped lang="less">
.fdmusic {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  .fd-header {
    width: 100%;
    height: 200px;
    background: rgba(208, 188, 160, 0.4);
    .header-lun {
      width: 60%;
      margin: -10px auto;
    }
  }
  .fd-main {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
    border: 2px solid #e2e2e2;
    border-top: none;
  }
}
</style>
