<template>
  <div>歌单详情</div>
</template>

<script>
import service from '@/global/service/index';
export default {
  data() {
    return {
      itemList: [],
    };
  },

  mounted() {
    this.getItemMusicList();
  },
  methods: {
    getItemMusicList() {
      const { id } = this.$route.query;
      console.log(id);
      // const { data: res } = await this.$http.get('/personalized?limit=10');
      // this.musicList = res.result;
      service.getMusicList({ id }).then((res) => {
        this.itemList = res.result;
        console.log(this.itemList);
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
