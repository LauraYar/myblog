import axios from '../request/axios';
import API from '../request/api';

export default {
  //  // 推荐歌单（请求“发现好歌单”数据）
  getMusicList(params) {
    return axios.get(API.musicList, params);
  },
  // banner获取数据（轮播图）
  getLunlist(params) {
    return axios.get(API.lunList, params);
  },
  // 获取相关歌单详情页
  getItemMusicList(params) {
    return axios.get(API.itemList, params);
  },
};
