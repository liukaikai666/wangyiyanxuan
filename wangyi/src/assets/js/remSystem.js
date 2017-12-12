// 适应屏幕
  document.getElementsByTagName('html')[0].style.fontSize = (document.documentElement.clientWidth || document.body.clientWidth)/375*100 + 'px';
  window.onresize = function(){
    // 取得当前视口宽度
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // 根据标准大小375,计算当前视口对应的根节点font-size
    var size = clientWidth/375*100 + 'px';
    document.getElementsByTagName('html')[0].style.fontSize = size;
  }
