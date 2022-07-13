const IP = 'http://127.0.0.1:3000';

export default {
  //  // 推荐歌单（请求“发现好歌单”数据）
  musicList: `${IP}/personalized`,
  // banner获取数据（轮播图）
  lunList: `${IP}/banner`,
  // 获取歌单详情
  itemList: (id) => `${IP}/playlist/detail/${id}`,
};
