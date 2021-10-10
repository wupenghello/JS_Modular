# 笔记

## 一、理解

1. 什么是模块/模块化？
  将一个复杂的程序依据一定的规则（规范）封装成几个块（文件），并进行组合在一起。块的内部数据/实现是私有的，只是向外部暴露一些接口（方法）与外部其它模块通信。

2. 为什么要模块化？
    * Web sites are turning into **Web Apps** 
    * Code **complexity（复杂度）**  grows as the site gets bigger
    * Highly **decoupled（解耦）**  JS files/modules is wanted
    * **Deployment（部署）**  wants optimized（优化） code in few HTTP calls

3. 模块化的好处
    * 避免命名冲突（减少命名空间污染）
    * 更好的分离，按需加载
    * 更高复用性
    * 高可维护性

4. 页面引入加载script的现实问题：请求过多、依赖模糊、难以维护

## 二、模块化规范
### 1. CommonJS
  1. 规范：
    (1) 说明：
      - 每个文件都可以当作一个模块，在服务器端，模块的加载是运行时同步加载的，在浏览器端，模块需要提前编译打包处理。
    (2) 基本语法：
      * 暴露模块：
        - module.export = value （暴露的是export）
        - export.xxx = value （暴露的是export的xxx属性）
        - 暴露的模块到底是什么？
      * 引入模块：
        require(xxx)
        - 第三方模块：xxx为模块名
        - 自定义模块：xxx为模块文件路径

  2. 实现：
    (1) 服务器端实现：Node.js
    (2) 浏览器端实现：Browserify （CommonJS的浏览器端打包工具）
    (3) 区别Node与Browserify
  
#### 其他知识 
  1. package.json内包名不能含中文和大写字母
  2. 引入第三方库一般放在自定义库之前
  3. 通过node运行app.js  =>   
  ```powershell
  $ node app.js
  ```
  4. 安装Browserify
  ```powershell
  $ npm install browserify -g
  $ npm install browserify -D
  ```
  5. 打包处理js，供浏览器端
  ```powershell
  $ browserify js/src/app.js -o js/dist/bundle.js 
  ```

### 2. AMD
  1. 说明：专门用于浏览器端，模块加载是异步的
  2. 基本语法：
    * 定义暴露模块：（显式声明，依赖注入）
      - 定义没有依赖的模块
        ```
        define(function(){
          return 模块
        })
        ```
      - 定义有依赖的模块
        ```
        define(['module1','module2'],function(m1,m2){
          return 模块
        })
        ```
      - 引入使用模块
        ```
        require(['module1','module2'],function(m1,m2){
          return 模块
        })
        ```
  3. 实现（浏览器端）：Require.js
  上网下载：https://www.requirejs-cn.cn/docs/download.html
  页面引入时需要加data-main：
  ```html
 <!-- 引入require.js 并指定js主模块入口 -->
  <script data-main="js/main.js"src="js/libs/require.js"></script>
  ```
  * jquery 内置支持require.js

### 3. CMD
  1. 说明：专门用于浏览器，模块的加载是异步的，模块使用时才会加载执行
  2. 基本语法：
    * 定义暴露模块
      - 定义么有依赖的模块
        ```
        define(function(require,exports,module){
          exports.xxx = value
          module.exports = value
        })
        ```

      - 定义有依赖的模块
        ```
        define(function(require,exports,module){
          //引入依赖模块（同步）
          var module2 = require('./module2')
          //引入依赖模块（异步）
          require.async('./module3',function(m3)){

          })
          //暴露模块
          exports.xxx.value
        })
        ```
    3.实现：sea.js https://www.zhangxinxu.com/sp/seajs/

### 4. ES6
1. 说明：依赖模块需要编译打包处理
2. 语法：
  * 导出模块：export
  * 引入模块：import {} from ''
3. 实现（浏览器端）：Babel

####
* cli: command line interface 命令行接口
* babel:
  1. 安装
  npm install --save-dev @babel/core @babel/cli @babel/preset-env
  2. 创建名为 babel.config.json (或 .babelrc )配置文件：(rc => run control)

```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```
  3. 使用语法
```
  【常规暴露】：
    统一暴露——————————
    function a
    function b
    export {a,b} (解构赋值简写)

    分别暴露——————————
    export function c
    export let arr = xxxx

    引入时：
    import {a,b} from ''
    import [c,arr] from ''

    【默认暴露】：
    export default {
      a:'',
      foo(){
        console.log(b)
      }
    }
    引入时：
    import XXX from '' （XXX可以自己起个名字）

    【引入第三方库】：
    import $ from 'jquery'
```
