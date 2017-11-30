/**
 * 3-11set-map数据结构
 *  1.Set的用法
 *  2.WeakSet的用法 
 *  3.Map的用法
 *  4.WeakMap的用法 
 */

// Set的用法
{
  let list = new Set()
  list.add(5)
  list.add(7)

  console.log('size', list.size) // 2
}

{
  let arr = [1,2,3,4,5]
  let list = new Set(arr)

  console.log('size', list.size) // 5
}

//   元素必须是唯一的 可用来去重
{
  let list = new Set()
  list.add(1)
  list.add(2)
  list.add(1)

  console.log('size', list.size, list)

  let arr = [1,2,3,1,'2']
  let list2 = new Set(arr)

  console.log('unique', list2)
}

// Set类型的方法
{
  let arr = ['add','delete','clear','has']
  let list = new Set(arr)

  console.log('has', list.has('add'))
  console.log('delete', list.delete('add'), list)
  list.clear()
  console.log('list', list)
}

// 遍历
{
  let arr = ['add','delete','clear','has']
  let list = new Set(arr)

  for (const key of list.keys()) {
    console.log('keys', key) // keys add
  }
  for (const value of list.values()) {
    console.log('keys', value) // keys add
  }
  for (const value of list) {
    console.log('keys', value) // keys add
  }
  for (const [key,value] of list.entries()) {
    console.log('keys', key,value) // keys add
  }

  list.forEach(item => {
    console.log(item)
  })
}

// WeakSet
/**
 * 1.只能是对象
 * 2.对象是弱引用，不会去检测有没有被垃圾回收
 */
{
  let weakList = new WeakSet()

  let arg = {}
  
  weakList.add(arg)
  // weakList.add(2) // Uncaught TypeError: Invalid value used in weak set
  console.log('weakList', weakList)

  /**
   * 1.没有size属性
   * 2.没有clear方法
   * 3.不能遍历
   */
}
/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map
 */
// Map
{
  let map = new Map()
  let arr = '123'
  // let arr = ['123']
  
  // 添加元素 map的元素key值可以是任何数据类型
  map.set(arr, 456)
  console.log('map',map,map.get(arr)) // Map(1) {Array(1) => 456} 456
}

{
  let map = new Map([['a',123],['b',456]])
  console.log('map args ', map) // {"a" => 123, "b" => 456}
  console.log('map size', map.size)
  console.log('map delete', map.delete('a'), map)
  console.log('clear', map.clear(), map)
}

// WeakMap
{
  /**
   * 同理，key值只能是对象
   */
  let weakmap = new WeakMap()

  let o = {}
  weakmap.set(o,123)
  console.log(weakmap.get(o))
}
