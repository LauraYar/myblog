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
  // 获取相关歌单详情页(发现好歌单➡跳转到详情页)调用例子 : /playlist/detail?id=24381616
  getItemMusicList(params) {
    return axios.get(API.itemList, params);
  },
  //  // 获取歌单所有歌曲
  getMusicItemList(params) {
    return axios.get(API.musicItemList, params);
  },
};
