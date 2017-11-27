let laosu = "老苏aaaa"
let blog = "welcome to my blog! hello " + laosu + "..."
let blog2 = `welcome to my blog! hello ${laosu}...`
document.write(blog)
document.write('<br>')
document.write(blog2)

// 运算
let a11= 1;
let b = 2;
let result = `<br> result:${a11+b}`
document.write(result)

// 字符串查找

document.write('<br> 字符串查找:' + blog2.indexOf(laosu))
document.write('<br> 字符串是否存在:' + (blog2.indexOf(laosu) > 0))
document.write('<br> 字符串是否存在:' + blog2.includes(laosu))
document.write('<br> 是否以某某字符串开始:' + blog2.startsWith(laosu))
document.write('<br> 是否以某某字符串结束:' + blog2.endsWith(laosu))
document.write('<br> 重复某某字符串n次:' + laosu.repeat(3))

// 二进制声明 Binary
let binary = 0B010101
console.log(binary) // 21

// 八进制声明 Octal
let octal = 0o666
console.log(octal) // 438

// 数字判断

let a2 = 11/4
console.log(Number.isFinite(a2)) // true
console.log(Number.isFinite('laosu')) // false
console.log(Number.isFinite(NaN)) // false
console.log(Number.isFinite(undefined)) // false

// NaN
console.log(Number.isNaN(NaN)) // true

// 整数
console.log(Number.isInteger(918.1)) // false
console.log(Number.isInteger(918)) // true

// 转换整形
console.log('转换整型')
console.log(Number.parseInt('918.6111')) // 918
console.log(Number.parseFloat('918.6666')) // 918.6666

// Number.isInteger 整型取值范围
console.log('整型取值范围:')
let NumInt = Math.pow(2,53)-1; //最大值： 不能大于2的53次方
console.log(NumInt)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

console.log('是否超过最大，小安全值')
console.log(Number.isSafeInteger(NumInt)) // true

// json 数组格式
console.log('json数组格式：')
let json = {
  '0' : 'laosu',
  '1' : '老苏',
  '2' : 'wisdom',
  length:3
}

// Array.from
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
let arr = Array.from(json)
console.log(arr)

// Array.of
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of
let arrStr = '3,4,5,6'
let stt = '[1,2,3,4]'
// let arr1 = eval(stt)
console.log(Array.of(arrStr))
console.log(Array.of(stt))

// 3.Array.find() 数组实例方法
/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */
let arr3 = [1,2,3,4,5,6,7,8,9]
let arr31 = ['laosu','jake','wisdom']
/**
 * arr.find(callback[, thisArg])
 * value    当前遍历到的元素
 * index    当前遍历到的索引
 * arr      数组本身
 * thisArg  可选，指定 callback 的 this 参数
 * return   当某个元素通过 callback 的测试时，返回数组中的一个值，否则返回 undefined。
 */
console.log(arr3.find(function(value, index, arr){
  // return value > 10  // undefined
  return value > 5
}));
console.log(arr31.find(function(value, index, arr) {
  return value == 'laosu'
}))

// 4: Array.fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素
/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
 *  value
    用来填充数组元素的值。
    start 可选
    起始索引，默认值为0。
    end 可选
    终止索引，默认值为 this.length。
    return 
    修改后的数组。
 */
let arr4 = ['laosu','jake','wisdom']
console.log('Array.fill')
console.log(arr.fill('老苏',1,1))

// 5: 数组循环
console.log('数组循环')
/**
 * for of
 */
for (const item of arr4) {
  console.log(item)
}
// 数组下标
for (const item of arr4.keys()) {
  console.log(item)
}
for (const item of arr4.entries()) {
  console.log(item)
}
for (let [index, val]  of arr4.entries()) {
  console.log(index + ': ' + val)
}

// Array.entries https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
/**
 * entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对
 */
console.log('Array.prototype.entries()')
let list = arr.entries();
console.log(list)
console.log(list.next().value)
console.log('.............')
console.log(list.next().value)
console.log('*************')
console.log(list.next().value)
console.log('6666666666666')

/**
 * 9: 函数扩展
 */
console.log('函数扩展')
 function add (a, b = 1){
   if(a == 0) {
     throw new Error('A is Error')
   }
   return a + b
 }
 console.log(add(1))

 function cut (a, b) {
  'use strict' // 严谨模式 在函数体中， 参数不能有默认值
   return a - b;
 }
 console.log(cut(10,10))

 console.log(add.length)

 console.log('箭头函数：')

 var addJt = (a,b = 1) => a + b
 var addJt1 = (a,b = 1) => {
   console.log('多行要加{}')
   return a + b
 }
 console.log(addJt(11))
 console.log(addJt1(12))
