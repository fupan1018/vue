function setFont(){
  window.onresize=function() {
  //当页面宽度变化时
    (function IsPC() {
    //判断是 移动端 还是 PC
      for (var userAgentInfo = navigator.userAgent, Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], flag = !0, v = 0; v < Agents.length; v++)
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          console.log('移动');
          document.getElementsByTagName('html')[0].style.fontSize=window.screen.width/5+'px';
          return
        }
      console.log('PC');
      document.getElementsByTagName('html')[0].style.fontSize=75+'px';
      return
    })();
  };
}
export{
  //导出定义的js文件
  setFont
}