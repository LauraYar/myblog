<template>
  <div>
    <div class="video-bg">
      <video autoplay loop muted>
        <source
          src="https://assets.codepen.io/3364143/7btrrd.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <!-- 主体部分 -->
    <div class="music-app">
      <!-- 头部导航栏区域 -->
      <div class="mcnav">
        <div class="top-wrap">
          <ul>
            <li @click="back">
              <img src="../components/images/返回.png" alt="" />
            </li>
            <li @click="forward">
              <img src="../components/images/返回2.png" alt="" />
            </li>
            <li @click="ref">
              <img src="../components/images/刷新.png" alt="" />
            </li>
          </ul>
        </div>
        <div class="nav">
          <router-link to="/" class="menu-link" active-class="is-active"
            >我的音乐</router-link
          >
          <router-link to="/Fdmusic" class="menu-link" active-class="is-active"
            >发现音乐</router-link
          >
          <router-link
            to="/Spacemusic"
            class="menu-link"
            active-class="is-active"
            >云村</router-link
          >
        </div>
        <div class="search">
          <i class="iconfont icon-search"></i>
          <input type="text" placeholder="音乐/视频" />
        </div>
        <button
          class="login-submit content-button status-button"
          @click="lg_submit"
          style="width: 250px"
        >
          登录
        </button>
      </div>

      <!-- 登录弹出框 -->
      <el-dialog title="登录" :visible.sync="dialogVisible" width="30%">
        <el-form-item label="短信登陆">
          <el-input placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>

      <!-- 主体区域 -->
      <el-container class="music-main" height="90vh">
        <el-aside width="12%">
          <el-menu router background-color="rgba(26, 27, 56, 0.4)">
            <el-menu-item index="/fdmusic">
              <template slot="title">发现音乐</template>
            </el-menu-item>
            <el-menu-item index="/fosmusic">
              <template slot="title">关注</template>
            </el-menu-item>
            <el-menu-item index="/favmusic">
              <template slot="title">我喜欢的音乐</template>
            </el-menu-item>
            <el-menu-item index="/Spacemusic">
              <template slot="title">云村</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main style="height: 100vh; flex-grow: 1">
          <div style="overflow-y: auto; height: 100%">
            <router-view></router-view>
          </div>
          <!-- 路由占位符 -->

          <!-- </el-table> -->
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
// import Background from '../components/background.vue';
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    forward() {
      this.$router.go(1);
    },
    ref() {
      this.$router.go(0);
    },
    back() {
      this.$router.back();
    },
    // 点击登录
    lg_submit() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="less" scoped>
video {
  position: fixed;
  right: 0px;
  bottom: 0px;
  min-width: 100%;
  height: 100vh;
  height: auto;
  width: auto;
  z-index: -100;
  source {
    min-width: 100%;
    height: 100vh;
    height: auto;
    width: auto;
  }
}
// 头部导航部分
.music-app {
  width: 80%;
  height: 90vh;
  margin: 20px auto;
  border-radius: 20px;

  background: rgba(26, 27, 56, 0.6);
  .mcnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 10%;
    border-bottom: 1px solid #344f6f;
    .top-wrap ul {
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0;
    }

    .top-wrap ul li {
      list-style: none;
      margin: 0 10px;
      cursor: pointer;
      width: 16px;
      height: 16px;
    }
    .nav {
      // background: rgba(20, 17, 17, 0.8);
      z-index: 1000;
      a {
        font-size: 16px;
        color: #fff;
        margin: 0 10px;
        z-index: 4;
      }
    }
    .search {
      position: relative;
      .iconfont.icon-search {
        position: absolute;
        top: 6px;
        left: 10px;
      }
      input {
        border-radius: 18px;
        width: 200px;
        height: 30px;
        padding-left: 26px;
        background: #fff;
      }
    }
  }

  // 主体区域
  .el-aside {
    // background: rgba(26, 27, 56, 0.6) !important;
    // border: 1px solid red;
    .el-menu {
      // background: rgba(26, 27, 56, 0.6) !important;
      .el-menu-item {
        color: #fff;
      }
    }
  }
  .el-main {
    height: 100%;
    overflow: hidden;
  }
}
</style>
