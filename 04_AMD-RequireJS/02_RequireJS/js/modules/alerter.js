// 定义一个有依赖的模块

define(["./dataService","jquery"], function(dataService, $){
    const msg = 'a'
    function showMsg(){
      console.log(msg, dataService.getName());
    }
    $('body').css('background',"wheat")
    //暴露模块
    return {showMsg:showMsg}
  })

