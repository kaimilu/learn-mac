/**
 * 对象扩展
 *    函数新增特性
 *      1.简洁表示法
 *      2.属性表达式
 *      3.扩展运算符
 *      4.Object新增方法
 */

  // 简洁表示法
 {
   let o = 1
   let k = 2
   let es5 = {
     o:o,
     k:k
   }
   let es6 = {
     o,
     k
   }
   console.log(es5, es6)

   let es5_method = {
     hello: function() {
       console.log('laosu')
     }
   }

   let es6_method = {
     hello() {
       console.log('laosu')
     }
   }

   console.log(es5_method.hello(), es6_method.hello())
   
 }

// 属性表达式
{
  let a = 'b'
  let es5_obj = {
    a: 'c',
    b: 'c'
  }

  let es6_obj = {
    [a]: 'c'
  }

  console.log(es5_obj,es6_obj)
}

// 扩展运算符
{
  console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc') // 字符串 true true
  
  console.log('数组', Object.is([],[]), [] === []) // 数组 false false

  // 拷贝 注限制 只能 浅拷贝
  console.log('拷贝 ', Object.assign({a: 'a'}, {b: 'b'}));

  let test = {k:123, o:456}
  for (let [key, value] of Object.entries(test)) {
    console.log([key,value])
  }
}

{
  // let {a,b, ...c} = {a:'test',b:'kill',c:'ddd',d:'ccc'}

}