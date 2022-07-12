<template>
  <div class="container">
    <div class="header-container">
      <img src="../assets/images/17.jpg" alt="" />
    </div>
    <Header></Header>
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
</style>
