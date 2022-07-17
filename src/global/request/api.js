const IP = 'http://127.0.0.1:3000';

export default {
  //  // 推荐歌单（请求“发现好歌单”数据）
  musicList: `${IP}/personalized`,
  // banner获取数据（轮播图）
  lunList: `${IP}/banner`,
  // 获取歌单详情,调用例子 : /playlist/detail?id=24381616
  itemList: (data) => `${IP}/playlist/detail/${data}`,
  // itemList: `${IP}/playlist/detail/${id}`,
  // 获取歌单所有歌曲
  musicItemList: `${IP}/playlist/track/all`,
};
