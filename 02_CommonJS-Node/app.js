// 将其他模块汇集到主模块
let uniq = require('uniq') // 引入第三方库，需放到自定义库顶部

let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

module1.foo()
module2()
module3.bar()
module3.foo()

let result = uniq(module3.arr)
console.log(result);