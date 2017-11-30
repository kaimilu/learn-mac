/**
 * 函数扩展:
 * 1.参数默认值
 * 2.rest参数
 * 3.扩展运算符
 * 4.箭头函数
 * 5.this绑定
 * 6.尾调用
 */

 {
   // 参数默认值, 注： 默认值不能放在无默认值参数前面
  
   function test(x, y = 'world') {
     console.log('默认值 ',x,y)
   }
   test('hello')          // 默认值  hello world
   test('hello','laosu')  // 默认值  hello laosu
 }

 {
   let a = 'test'
   function test2(x,y=x) {
     console.log('作用域：',x,y)
   }
   test2('kill')  // 作用域： kill kill
   test2()        //  作用域： undefined undefined
 }

 {
   // rest参数 注rest参数后不能再有别的参数
   function test3(...arg) {
     for (const v of arg) {
       console.log('rest', v)
     }
   }

   test3('laosu','jake','wisdom','a')
 }

 {
   console.log(...[1,2,4])        // 1 2 4
   console.log("a", ...[1,2,3,4]) // a 1 2 3 4
 }

 {
   // 箭头函数
 
   let arrow = v => v*2
   console.log(arrow(3))  // 6

   let arrow2 = () => 5
   console.log(arrow2())  // 5
 }

 {
  // 尾调用

  // function tail(x) {
  //   console.log('tail', x)
  // }

  // function fx(x) {
  //   return tail(x)
  // }
  
   var tail = x => {
     console.log('tail', x)
   }
   var fx = x=> tail(x)

   fx(123) // tail 123
 }