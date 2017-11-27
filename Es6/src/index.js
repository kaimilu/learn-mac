let a = 1;
console.log(a);

// var 
// let
// const

(function(){
  var ls = "laosu"
  window.onload = function(){
    // console.log(ls)
  }
})('申明方式1 => var')

;(function(){
  var b = "laosu"
  {
    let b = "老苏"
  }
  console.log(b)
})('申明方式 => let')

;(function(){
  for(var i =0; i< 10; i++){
    console.log(i)
  }
  console.log("循环体外：" + i)
})()

;(function(){
  // let a =0,b=1,c=2
  // let [a,b,c] = [0,1,2]
  let [a,[b,c],d] = [0,[1,2],3]
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)

  // 默认值
  let [foo=false] = [];
  console.log(foo)

  // let [aa,bb = '老苏'] = ['laosu']
  // let [aa,bb = '老苏'] = ['laosu', undefined]
  let [aa,bb = '老苏'] = ['laosu', null] // laosunull
  console.log(aa+bb)

  // 3.2 对象解构
  let {foor,bar} = {foor:'laosu',bar:'老苏'}
  console.log(foor + bar)

  let fzu
  ({fzu} = {fzu:'Wisdom'})
  console.log(fzu)

  // 3.3 字符串解构
  const [a1,b2,c3,d4,e5] = 'LaoSu'
  console.log(a1)
  console.log(b2)
  console.log(c3)
  console.log(d4)
  console.log(e5)
})('3. 解构赋值')

;(function(){
  //4.1: ... 扩展运算符
  function js(...arg){
    console.log(arg[0])
    console.log(arg[1])
    console.log(arg[2])
  }
  js(0,1)

  let arr1 = ['laosu','wisdom','jake','suzhihui']
  // let arr2 = arr1 // 共享同一块内存引用
  let arr2 = [...arr1] // ... 表示的是arr1里面的值

  arr2.push('zyq');
  console.log(arr1)
  console.log(arr2)

  // 4.2 ... rest运算符
  function test(first,...arg) {
    // console.log(arg.length)
    // for (var i = 0; i<arg.length; i++) {
    //   console.log(i)
    // }
    for (const item of arg) {
      console.log(item)
    }
  }
  
  test(0,1,2,3,4,5,6,7)
})('4. 对象扩展运算符...')

;(function(){
  
})('5. 字符串模版')