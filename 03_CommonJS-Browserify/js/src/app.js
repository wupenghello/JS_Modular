// 将其他模块汇集到主模块

let module1 = require('./module1')
let module2 = require('./module2')
let module3 = require('./module3')

module1.foo()
module2()
module3.foo()
module3.bar()