// 定义一个没有依赖的模块
(
  function(window){
    let name = 'dataSERVICE.js'
    function getName(){
      return name
    }
    window.getService = {getName}
  })(window)