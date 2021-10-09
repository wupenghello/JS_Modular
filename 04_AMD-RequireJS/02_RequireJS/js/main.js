(function(){

  requirejs.config({
    baseUrl: 'js', // 基本路径
    paths: { // 配置路径
      alerter:'./modules/alerter',
      dataService:'./modules/dataService',
      jquery:'./libs/jquery-3.6.0.min'
    }
});

  requirejs(['alerter'],function(alerter){
    alerter.showMsg()
  })
})()