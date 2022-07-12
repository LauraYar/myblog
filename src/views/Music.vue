<template>
  <div>
    <div class="mcnav">
      <div class="nav">
        <a>我的音乐</a>
        <a>发现音乐</a>
        <a>云村</a>
      </div>
      <div class="search"><input type="text" placeholder="音乐/视频" /></div>
    </div>
    <span></span>
    <!-- 主体区域 -->
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router>
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
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.mcnav {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  // line-height: 80px;
  padding: 0 20%;
  background: #242424;

  a {
    font-size: 16px;
    margin: 10px;
  }
  input {
    border-radius: 18px;
    width: 200px;
    height: 30px;
    padding-left: 26px;
    background: #fff;
  }
}
span {
  position: absolute;
  top: 60px;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 4px;
  background: red;
}
// 主体区域
.el-container {
  margin-top: 62px;
}
</style>
