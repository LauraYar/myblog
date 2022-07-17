<template>
  <div>
    <!-- 主体内容(头部) -->
    <div class="item-header">
      <div class="header-left">
        <img :src="pic" alt="" />
      </div>
      <div class="header-right">
        <div class="title">
          <i class="iconfont icon-gedan"></i>
          <span>{{ Muname }}</span>
        </div>
        <div class="avatar">
          <img :src="pic" alt="头像" />
        </div>
        <div class="icon-share">
          <div class="icon comment">
            <i class="iconfont icon-pinglun"></i>
            <div class="count"></div>
          </div>
          <div class="icon share">
            <i class="iconfont icon-fenxiangcopy"></i>
            <div class="count"></div>
          </div>
          <div class="icon download">
            <i class="iconfont icon-xiazai"></i>
            <div class="count">下载</div>
          </div>
          <div class="icon checkbox">
            <i class="iconfont icon-show_duoxuan"></i>
            <div class="count">多选</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from '@/global/service/index';
export default {
  data() {
    return {
      itemList: {},
      pic: this.$route.query.picUrl,
      Muname: this.$route.query.Muname,
    };
  },

  mounted() {
    this.getItemMusicList();
  },
  methods: {
    getItemMusicList() {
      // const { id } = this.$route.query;
      // const { pic } = this.$route.query.picUrl;

      service.getMusicList({}).then((res) => {
        console.log(res);
        this.itemList = res.result;
        // console.log(this.itemList);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.item-header {
  display: flex;
  // justify-content: space-around;
  // align-items: center;
  width: 100%;
  height: 500px;
  padding: 40px;
  border: 1px solid pink;
  .header-left {
    width: 200px;
    height: 200px;
    margin-right: 20px;
    img {
      width: 200px;
      height: 200px;
    }
  }
  .header-right {
    .title {
      display: flex;
      align-items: center;
      .iconfont.icon-gedan {
        font-size: 40px;
        color: #ec4141;
      }
      span {
        color: #373737;
        font-size: 18px;
        font-weight: 800;
      }
    }
    .avatar {
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    .icon-share {
      display: flex;
      .iconfont {
        font-size: 24px;
      }
      .icon {
        margin: 0 40px;
      }
    }
  }
}
</style>
