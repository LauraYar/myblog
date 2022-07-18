<template>
  <div class="fdmusic">
    <div class="fd-main">
      <div class="header-lun"><Swiper></Swiper></div>

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
  // height: 90vh;
  overflow: hidden;
  box-sizing: border-box;

  // .header-lun {
  //   // margin: -10px auto;
  // }

  .fd-main {
    width: 80%;
    // height: 100%;
    margin: 0 auto;
    padding: 0 20px;
    border: 1px solid#344f6f;
    box-shadow: 1px;
  }
}
</style>
