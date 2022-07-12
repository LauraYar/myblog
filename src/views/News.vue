<template>
  <div>
    <div class="header-container">
      <img src="../assets/images/16.jpg" alt="" />
    </div>
    <Header></Header>
    <!-- 新闻页面 -->
    <el-input
      placeholder="请输入内容"
      v-model="input3"
      class="input-with-select"
    >
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="明星" value="1"></el-option>
        <el-option label="电影" value="2"></el-option>
        <el-option label="音乐" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  components: { Header },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.header-container {
  width: 100%;
  height: 400px;
  > img {
    width: 100%;
    height: 100%;
  }
}
.el-input {
  position: absolute;
  top: 20px;
  width: 600px;
  height: 40px;
  background: #002649;
  right: 10%;
}
</style>
