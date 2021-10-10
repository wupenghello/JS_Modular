// 引入其它的模块

// 语法： import xxx from '路径'

import $ from 'jquery'

import {foo,bar} from './module1'
import {fun,fun2} from './module2'
import module3 from './module3'

$('body').css('background','green')

console.log(
  foo,
  bar,
  fun,
  fun2
);

module3.foo()
console.log(module3.msg);