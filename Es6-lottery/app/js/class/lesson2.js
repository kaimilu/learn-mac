/**
 * 解构赋值
 */

 {
   let a, b, rest
   [a,b] =[1,2] // 数组解构
   console.log('============ 数组解构 ============')
   console.log(a,b)
 }

 {
   let a, b, rest
   [a,b,...rest] = [1,2,3,4,5,6] // ...扩展运算符
   console.log(a,b,rest)
 }

 // 对象解构
 {
   let a, b
   ({a,b} = {a:1, b:2})
   console.log('============ 对象解构 ============')
   console.log(a,b)
 }

 // 默认值
 {
   let a,b,c,rest
  //  [a,b,c=3]=[1,2]
   [a,b,c]=[1,2] // 如果没有配对成功就是undefined
   console.log(a,b,c) // 1,2,undefined
 }

 // 变量交换
 {
    let a = 1;
    let b = 2;
    [a,b] = [b,a]
    console.log(a,b) // 2,1
 }

// 
 {
  function f() {
    return [1,2]
  }
  let a,b;
  [a,b] = f()
  console.log(a,b)
 }

 {
   function f() {
     return [1,2,3,4,5]
   }
   let a,b,c;
   [a,,,b] = f()
   console.log(a,b)
 }

 {
   function f() {
     return [1,2,3,4,5]
   }
   let a,b,c;
  //  [a,...b] = f()
   [a,,...b] = f()
   console.log(a,b)
 }

 {
   let o = {p:42, q:true}
   let {p,q} = o
   console.log(p,q)
 }

 {
   let {a=10,b=5} = {a:3}
   console.log(a,b)
 }

 {
   let metaDate = {
     title: 'abc',
     test:[{
       title: 'test',
       desc: 'description'
     }]
   }
   
   let {title:esTitle,test:[{title:cnTitle,desc:descLaosu}]} = metaDate;
   console.log(esTitle,cnTitle,descLaosu)
 }