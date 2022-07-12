<template>
  <div class="container">
    <el-row class="nav">
      <el-col :span="22" class="nav-left">
        <router-link to="/home">首页</router-link>
        <router-link to="/news">新闻</router-link>
        <router-link to="/moods">心情</router-link>
        <router-link to="/wall">壁纸</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.nav {
  position: absolute;
  top: 20px;
  width: 100%;
  padding: 0 10%;
  .nav-left a {
    font-size: 16px;
    font-weight: 500;
    color: #ededed;
  }
  button {
    width: 50px;
    border-radius: 20%;
    border: none;
  }
}

a {
  margin: 40px;
}
.router-link-exact-active {
  text-decoration: none;
  color: yellow;
}
</style>
