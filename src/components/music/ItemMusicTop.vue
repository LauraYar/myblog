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
    <!--歌单列表 -->

    <el-table
      :data="musicItemList"
      style="width: 100%"
      background-color="transparent"
    >
      <el-table-column type="index"> </el-table-column>
      <el-table-column label="like" width="180"> </el-table-column>
      <el-table-column label="歌名" prop="name" width="180"> </el-table-column>
      <el-table-column label="mv" prop="mv">
        <i class="el-icon-video-camera"></i>
      </el-table-column>
      <el-table-column label="歌手" prop="ar[0].name"> </el-table-column>
    </el-table>
    <!-- 底部制作 -->
    <!-- 底部区域 -->
    <div class="footer">
      <div class="footer-left">
        <img src="" alt="" />
        <div class="title">
          <div class="music-name"></div>
          <div class="music-author"></div>
        </div>
      </div>
      <!-- 中间播放区域 -->
      <div class="footer-mid">
        <div class="icon-list">
          <i class="iconfont icon-xunhuanjianting"> </i>
          <img src="../images/play-pre.png" alt="" />
          <i class="iconfont icon-zanting"></i>
          <img src="../images/play-next.png" alt="" />
        </div>
        <div class="progress"></div>
      </div>
      <!-- 右边音量等 -->
      <div class="footer-right">
        <i class="iconfont icon-meirituijian"> </i>
      </div>
    </div>
  </div>
</template>

<script>
import service from '@/global/service/index';
export default {
  data() {
    return {
      itemList: [],
      pic: this.$route.query.picUrl,
      Muname: this.$route.query.Muname,
      musicItemList: [],
      musicPlayList: {},
    };
  },

  mounted() {
    this.getItemMusicList();
    this.getMusicItemList();
  },

  methods: {
    getItemMusicList() {
      // const { id } = this.$route.query;
      // const { pic } = this.$route.query.picUrl;
      service.getMusicList().then((res) => {
        // console.log(res);
        this.itemList = res.result;
      });
    },
    getMusicItemList() {
      // console.log(this.$route.query);
      const { id } = this.$route.query;
      service.getMusicItemList({ id, limit: 10 }).then((res) => {
        // console.log(res);
        this.musicItemList = res.songs;
        this.musicPlayList = res.privileges;

        console.log(this.musicItemList);
        console.log(this.musicPlayList);
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
  // height: 500px;
  padding: 40px;

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

.table-wrapper /deep/ .el-table,
.el-table__expanded-cell {
  background-color: transparent !important;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // position: absolute;
  // bottom: 0;
  width: 100%;
  height: 60px;
  background: #e2e2e2;
  border-top: 1px solid black;
  .footer-left {
    width: 300px;
    height: 100%;

    border: 1px solid black;
  }
  .footer-mid {
    .icon-list {
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 30px;
        color: #ff5d50;
        margin: 0 10px;
      }
    }
  }
  .footer-right {
    width: 300px;
    height: 100%;
    .iconfont {
      font-size: 30px;
      color: #ff5d50;
      margin: 0 10px;
    }
  }
}
</style>
