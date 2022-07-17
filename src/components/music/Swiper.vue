<template>
  <div>
    <!-- 轮播图 -->
    <el-carousel :interval="3000" type="card" width="700px" height="200px">
      <el-carousel-item v-for="item in lunList" :key="item.bannerId">
        <img :src="item.pic" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import service from '@/global/service/index';
export default {
  data() {
    return {
      // 轮播图请求回来的数据
      lunList: [],
    };
  },
  created() {
    this.getLunlist();
  },
  methods: {
    getLunlist() {
      // banner获取数据（轮播图）
      service.getLunlist({ type: 2 }).then((res) => {
        this.lunList = res.banners;
        // console.log(this.lunList);
      });
    },
  },
};
</script>

<style scoped lang="less">
.el-carousel__item img {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
