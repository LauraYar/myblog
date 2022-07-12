function remSize() {
  // 获取设备宽度
  let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
  if (deviceWidth <= 750) {
    deviceWidth = 750;
  }
  //设计稿375px-750px  除以7.5则 1rem=100px
  document.documentElement.style.fontSize = deviceWidth / 75 + 'px';
  // 设置body字体大小
  document.querySelector('body').style.fontSize = 0.3 + 'rem';
}
// 调用函数
remSize();
// 当窗口发生变化时调用
window.onresize = function () {
  remSize();
};
