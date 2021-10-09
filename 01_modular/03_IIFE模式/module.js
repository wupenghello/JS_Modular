/* IIFE模式：匿名函数自调用（闭包） */
//IIFE模式

(function(){
  let msg = 'module3';
  function foo(){
    console.log('foo()',msg);
  }
  window.module3 = {foo}
})()