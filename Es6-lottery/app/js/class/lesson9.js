/**
 * https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol
 * Symbol用法
 *   Symbol的概念： 独一无二的
 *   Symbol的作用
 */

// 声明
{
  let a1 = Symbol();
  let a2 = Symbol();
  console.log(a1 === a2) // false

  let a3 = Symbol.for('a3');
  let a4 = Symbol.for('a3')
  console.log(a3 === a4) // true
}

// 使用场景
{
  let a1 = Symbol.for('abc')
  let obj = {
    [a1]: '123', // 'abc': '123' 此处是Symbol类型数据
    'abc': 345,
    'c':456
  }
  console.log('obj', obj)
  // fof forIn 拿不到Symbol类型数据
  for (const [key,value] of Object.entries(obj)) {
    console.log([key,value])
  }

  // 只取Symboo类型数据
  Object.getOwnPropertySymbols(obj).forEach(item=>{
    console.log(obj[item]) // 123
  })

  // 都取
  Reflect.ownKeys(obj).forEach(item => {
    console.log('ownkeys ', obj[item])
  })
}