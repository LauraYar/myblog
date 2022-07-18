// 发现好歌单2
<template>
  <div class="music-list">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <!-- 轮播图 -->
    <div class="home">
      <!-- swiper大的父盒子 -->
      <swiper
        class="swiper"
        :options="swiperOption"
        @slideChange="onSlideChange"
        ref="mySwiper"
      >
        <!-- 循环每张图片 -->
        <swiper-slide v-for="item in musicList" :key="item.id">
          <!-- 实现路由跳转：点击任意一个歌单，跳转到相应页面 -->
          <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
            <div class="img-play">
              <!-- 放图片 -->
              <img :src="item.picUrl" alt="" />
              <!-- 播放量 -->
              <span class="playCount">
                <i class="iconfont icon-24gl-playCircle"></i>
                <!-- {{ item.playCount }} -->
                {{ changeCount(item.playCount) }}
              </span>
              <!-- 音乐描述 -->
              <div class="mask"></div>
            </div>
            <div class="list-name">{{ item.name }}</div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import service from '@/global/service/index';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      musicList: [],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
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
      service.getMusicList({ limit: 10 }).then((res) => {
        this.musicList = res.result;
        // console.log(this.musicList);
      });
    },

    changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + '亿';
      } else if (num > 10000) {
        return (num / 10000).toFixed(1) + '万';
      }
    },
    onSlideChange() {},
    //
  },
};
</script>

<style scoped lang="less">
.music-list {
  width: 100%;
  height: 100%;
  .musicTop {
    display: flex;
    justify-content: space-between;
    // margin: 10px 0;
    .title {
      font-size: 16px;
      font-weight: 800;
    }
    .more {
      width: 80px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 2px solid #e2e2e2;
      border-radius: 20px;
    }
  }
  // 轮播图
  .home {
    .swiper {
      height: 300px;

      .swiper-slide {
        .img-play {
          position: relative;
          width: 194px;
          height: 200px;

          img {
            width: 194px;
            height: 200px;
            border-radius: 6px;
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
          font-size: 12px;
        }
      }
    }
  }
}
</style>
