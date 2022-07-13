<template>
  <div class="container">
    <div class="main">
      <div class="title">欢迎来到Laura的博客</div>
      <router-link to="/home">
        <img src="../assets/images/heartpink.gif" alt="点击登录"
      /></router-link>
    </div>
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
.container {
  width: 100%;
  height: 100vh;
  background: url('../assets/images/12.jpg') no-repeat;
  background-size: 100% 100%;
  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .title {
    font-size: 40px;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
  }

  img {
    width: 50px;
    height: 50px;
    margin: auto;
  }
}
</style>
