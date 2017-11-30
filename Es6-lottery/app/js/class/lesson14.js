/**
 * Iterator 数据接口
 *  1.Iterator 的基本用法
 *  2.for...of 循环
 */

// Iterator 的基本用法
{
  let arr = ['hello', 'world']
  let map = arr[Symbol.iterator]()
  // done:true 表示没有下一步操作
  console.log(map.next()) // {value: "hello", done: false}
  console.log(map.next()) // {value: "hello", done: false}
  console.log(map.next()) // {value: undefined, done: true}
}

// 自定义iterator接口
{
  let obj = {
    start: [1,3,2],
    end: [7,9,8],
    [Symbol.iterator](){
      let self = this
      let index = 0
      let arr = self.start.concat(self.end)
      let len = arr.length;
      return {
        next() {
          if(index<len){
            return {
              value: arr[index++],
              done: false
            }
          }else{
            return {
              value: arr[index++],
              done: true
            }
          }
        }
      }
    }
  }

  for (const key of obj) {
    console.log(key)
  }
}

// for...of
{
  let arr = ['hello', 'world']
  for (const iterator of arr) {
    console.log(iterator)
  }
}