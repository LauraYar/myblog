<template>
  <div class="container">
    <div class="header-container">
      <img src="../assets/images/11.jpg" alt="" />
    </div>
    <button @click="logOut" id="logout">退出</button>
    <Header></Header>
    <div class="main">
      <!-- 主体第一层About me -->
      <el-row class="main-top">
        <el-col class="selfInfo" :span="5">
          <img src="../assets/images/author_bg.jpg" alt="左侧背景图" />
          <div class="header-title">ABOUT ME</div>
          <div class="avatar">
            <img src="../assets/images/avatar1.jpg" alt="头像" />
            <h2>Laura</h2>
            <p class="motto joe_motto">🚩上线全凭心情！！！</p>
            <div class="count">
              <div class="item" title="累计分类数 1">
                <span class="num">15</span>
                <span>阅读量</span>
              </div>
              <div class="item" title="累计文章数 1">
                <span class="num">2</span>
                <span>文章数</span>
              </div>
              <div class="item" title="累计评论数 0">
                <span class="num">0</span>
                <span>评论数</span>
              </div>
            </div>
            <div class="self-nav">
              <ul>
                <li><a href="#">我的简介</a></li>
                <li><a href="#">热门文章</a></li>
                <li><a href="#">收藏新闻</a></li>
                <li><a href="#">壁纸</a></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col class="hot-article" :span="18" :offset="1">
          <dl>
            <dt>简介</dt>
            <dd class="content">
              <img src="../assets/images/9.jpg" alt="" />
              <div class="text">
                <div class="text-main">
                  <h4>一杯酒的容量</h4>
                  <a>
                    每个人的生活只为自己，其他一切都是徒劳的。对自己好一点，不要要求太多，继续追求自己的内心方向，并努力工作以实现自己的生命！
                  </a>
                </div>
                <span class="time">3-21 14:21</span>
              </div>
            </dd>
            <dd class="content">
              <img src="../assets/images/content-1.jpg" alt="" />
              <div class="text">
                <div class="text-main">
                  <h4>一杯酒的容量</h4>
                  <a>
                    每个人的生活只为自己，其他一切都是徒劳的。对自己好一点，不要要求太多，继续追求自己的内心方向，并努力工作以实现自己的生命！
                  </a>
                </div>
                <span class="time">3-21 14:21</span>
              </div>
            </dd>
            <dd class="content">
              <img src="../assets/images/content-2.jpg" alt="" />
              <div class="text">
                <div class="text-main">
                  <h4>一杯酒的容量</h4>
                  <a>
                    每个人的生活只为自己，其他一切都是徒劳的。对自己好一点，不要要求太多，继续追求自己的内心方向，并努力工作以实现自己的生命！
                  </a>
                </div>
                <span class="time">3-21 14:21</span>
              </div>
            </dd>
          </dl>
        </el-col>
      </el-row>
      <!-- 主体第二层 article -->
      <el-row class="main-top">
        <el-col class="selfInfo" :span="5">
          <div class="header-title">ARTICLE</div>
        </el-col>
        <el-col class="hot-article" :span="18" :offset="1">
          <dl>
            <dt>最新文章</dt>
            <dd class="content">
              <img src="../assets/images/9.jpg" alt="" />
              <div class="text">
                <div class="text-main">
                  <h4>一杯酒的容量</h4>
                  <a>
                    每个人的生活只为自己，其他一切都是徒劳的。对自己好一点，不要要求太多，继续追求自己的内心方向，并努力工作以实现自己的生命！
                  </a>
                </div>
                <span class="time">3-21 14:21</span>
              </div>
            </dd>
            <dd class="content">
              <img src="../assets/images/content-1.jpg" alt="" />
              <div class="text">
                <div class="text-main">
                  <h4>一杯酒的容量</h4>
                  <a>
                    每个人的生活只为自己，其他一切都是徒劳的。对自己好一点，不要要求太多，继续追求自己的内心方向，并努力工作以实现自己的生命！
                  </a>
                </div>
                <span class="time">3-21 14:21</span>
              </div>
            </dd>
            <dd class="content">
              <img src="../assets/images/content-2.jpg" alt="" />
              <div class="text">
                <div class="text-main">
                  <h4>一杯酒的容量</h4>
                  <a>
                    每个人的生活只为自己，其他一切都是徒劳的。对自己好一点，不要要求太多，继续追求自己的内心方向，并努力工作以实现自己的生命！
                  </a>
                </div>
                <span class="time">3-21 14:21</span>
              </div>
            </dd>
          </dl>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  components: { Header },
  data() {
    return {};
  },
  methods: {
    logOut() {
      console.log(this);
      this.$router.push('/welcome');
    },
  },
};
</script>

<style lang="less" scoped>
.header-container {
  width: 100%;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
#logout {
  position: absolute;
  top: 20px;
  right: 10%;
  width: 100px;
  border-radius: 6%;
  border: 1px solid #e2e2e2;
}
.container {
  background: url('../assets/images/main-bg.webp') no-repeat;
  background-size: 100% 100%;
}
.main-top {
  padding: 20px 0;
  margin: 40px 20% 0;
  height: 600px;
  border-top: 2px solid grey;

  .selfInfo {
    position: relative;
    height: 100%;
    border: 2px solid #e2e2e2;
    box-shadow: 4px;
    border-radius: 2%;
    background: #ffffff;
    .header-title {
      position: absolute;
      top: -34px;
      left: 200%;
      width: 100px;
      height: 20px;
      text-align: center;
      background: #f1f4f5;
    }
    > img {
      width: 100%;
    }
    .avatar {
      position: absolute;
      top: 30px;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      h2 {
        margin: 10px 0;
      }

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 4px solid #e2e2e2;
        object-fit: cover;
      }
      .count {
        display: flex;
        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px;
          margin: 10px;
          border-right: 2px solid #e2e2e2;
        }
      }
      .self-nav {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        ul {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
          li {
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
            border-top: 2px solid #e2e2e2;
            &:last-child {
              border-bottom: 2px solid #e2e2e2;
            }
          }
        }
      }
    }
  }
  .hot-article {
    height: 100%;
    border: 2px solid #e2e2e2;
    box-shadow: 4px;
    border-radius: 2%;
    background: #ffffff;
    dt {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      padding: 0 10px;
      font-size: 16px;
      border-bottom: 2px solid #e2e2e2;
    }
    dd {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 10px 0;
      img {
        width: 200px;
        margin-right: 20px;
      }
    }
  }
}
</style>
