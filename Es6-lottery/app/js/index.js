import 'babel-polyfill'     // es7 兼容包
// import './class/lesson1.js' // 1.let const
// import './class/lesson2.js' // 2.解构赋值
// import './class/lesson3.js' // 3.正则扩展
// import './class/lesson4.js' // 4.字符串扩展（上）
// import './class/lesson5.js' // 5.数值扩展
// import './class/lesson6.js' // 6.数组扩展
// import './class/lesson7.js' // 7.函数扩展
// import './class/lesson8.js'   //  8.对象扩展
// import './class/lesson9.js'   //  9.Symbol用法
// import './class/lesson10.js'   //  10.set-map数据结构
// import './class/lesson11.js'  //11.Proxy和Reflect 代理、反射
// import './class/lesson12.js'  //12.类和对象
// import './class/lesson13.js'  //13.Promise 异步编程
// import './class/lesson14.js'  //14.Iterator 数据接口
// import './class/lesson15.js'  //15.Genertor 异步编程
// import './class/lesson16.js'  //16.Decorators 修饰器 
// import './class/lesson17.js'  //17. 模块化 

/**
 * import * as 别名 引入所有
 * import 别名.xxx 引入默认项
 * import {A} 引入指定项
 */
// import{ A, test, Hello} from './class/lesson17'
// console.log(A, test, Hello)

// import {A} from './class/lesson17'
// import * as lesson from './class/lesson17'

import lesson17 from './class/lesson17'

console.log(lesson17.A)
