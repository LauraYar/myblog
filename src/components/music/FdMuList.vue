// 发现好歌单1
<template>
  <div class="fdmusiclist">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="img-list">
      <div class="list-item" v-for="item in musicList" :key="item.id">
        <router-link
          :to="{
            path: '/itemMusic',
            query: { id: item.id, picUrl: item.picUrl, Muname: item.name },
          }"
        >
          <div class="img-play">
            <img :src="item.picUrl" alt="" />
          </div>
          <!-- 播放量 -->
          <span class="playCount">
            <i class="iconfont icon-24gl-playCircle"></i>
            <!-- {{ item.playCount }} -->
            {{ changeCount(item.playCount) }}
          </span>
          <!-- 音乐描述 -->
          <div class="mask"></div>
          <div class="list-name">{{ item.name }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import service from '@/global/service/index';
export default {
  data() {
    return {
      musicList: [],
    };
  },
  created() {
    this.getMusicList();
  },
  methods: {
    // 推荐歌单（请求“发现好歌单”数据）
    getMusicList() {
      // const { data: res } = await this.$http.get('/personalized?limit=10');
      // this.musicList = res.result;
      service.getMusicList({ limit: 15 }).then((res) => {
        console.log(res);
        this.musicList = res.result;
        console.log(this.musicList);
      });
    },
    changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + '亿';
      } else if (num > 10000) {
        return (num / 10000).toFixed(1) + '万';
      }
    },
  },
};
</script>

<style lang="less" scoped>
.fdmusiclist {
  width: 100%;
  // height: 400px;
  .musicTop {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    .title {
      font-size: 16px;
      font-weight: 800;
    }
    .more {
      width: 80px;
      height: 30px;
      line-height: 30px;
      text-align: center;-
      border: 2px solid #e2e2e2;
      border-radius: 20px;
    }
  }
  .img-list {
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    width: 100%;
    height: 100%;
    // height: 600px;
    padding: 20px 0;
    border-top: 4px solid #c10d0c;

    .list-item {
      position: relative;
      width: 200px;
      height: 200px;
      margin-bottom: 60px;

      img {
        width: 200px;
        height: 200px;
      }
      .playCount {
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translate(-50%);
        display: flex;
        align-items: center;
        color: #fff;
      }

      .mask {
        position: absolute;
        bottom: -2px;
        width: 100%;
        height: 30px;
        background: #000000;
        opacity: 0.2;
      }
    }
    .list-name {
      margin-top: 8px;
      font-size: 14px;
    }
  }
}
</style>
>
