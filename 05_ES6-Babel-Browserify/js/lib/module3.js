"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 默认暴露 可以暴露任意数据类型，暴露什么数据接收到的就是什么数据
// export default value
// export default () => {
//   console.log('默认暴露的箭头函数');
// }
var _default = {
  msg: "默认暴露",

  foo() {
    console.log('默认暴露的箭头函数');
  }

};
exports.default = _default;