/**
 * 3-6数值扩展
 */
console.log('================数值扩展=================')
 {
   console.log('B', 0B111110111)
   console.log(0b111110111) // 二进制： 503
   console.log(0o767)       // 八进制： 503
   console.log('O',0O767)       // 八进制： 503
 }

 {
   /**
    * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
    */
   console.log('15', Number.isFinite(15)) // 15 true
   console.log('NaN', Number.isFinite(NaN)) // NaN false
   console.log('1/0', Number.isFinite('true'/0)) // 1/0 false

   console.log('NaN', Number.isNaN(NaN)) // NaN true
   console.log('NaN', Number.isNaN(0)) // NaN false
 }

 {
   // 数字是不是整数
   console.log('25: ',Number.isInteger(25))  // 25:  true
   console.log('25.0: ',Number.isInteger(25.0))  // 25.0:  true
   console.log('25.01: ',Number.isInteger(25.01))  // 25.01:  false
   // 非数 ，判断会出错
   console.log('25.01: ',Number.isInteger('25'))  // 25:  false

   // 2的53次方
   console.log(Number.MAX_SAFE_INTEGER,',',Math.pow(2,53)-1)
   console.log(Number.isSafeInteger(Math.pow(2,53)))
   console.log(Number.MIN_SAFE_INTEGER)
 }

 {
   // 取小数的整数
   /**
    * es5: Math.float, Math.ceil, Math.parseInt
    */
    console.log(4.1,Math.trunc(4.1)) // 4.1 4
    console.log(4.9, Math.trunc(4.9))

 }

 {
  /**
   * 判断一个数是正数、负数、零
   */ 
  console.log('-5', Math.sign(-5)) // -5 -1
  console.log('0', Math.sign(0))  // 0 0
  console.log('5', Math.sign(5))  // 5 1
  console.log('50', Math.sign('50')) // 50 1
  console.log('0', Math.sign('0')) // 50 1
  console.log('-10', Math.sign('-10')) // 50 1
  console.log('foo', Math.sign('foo')) // 50 NaN
 }
 
 {
   /**
    * 立方根
    */
    // Math.cbrt(-1)
    console.log(-1,Math.cbrt(-1)) // -1 -1
    console.log(8, Math.cbrt(8))  // 2
 }