<template>
  <div class="iconList">
    <!-- 每日推荐 -->
    <div class="iconItem">
      <i class="iconfont icon-meirituijian"></i>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <i class="iconfont icon-TV"></i>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <i class="iconfont icon-gedan"></i>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <i class="iconfont icon-paihangbang"></i>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.iconList {
  display: flex;
  justify-content: space-around;
  align-content: center;
  .iconItem {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    .iconfont {
      font-size: 50px;
      color: #ff2a00;
    }
  }
}
</style>
