// 定义一个有依赖的模块
(function(window, getService){
  let msg = 'alerter.js'
  function showMsg(){
    console.log(msg, getService.getName());
  }
  window.alerter = {showMsg}
})(window, getService)