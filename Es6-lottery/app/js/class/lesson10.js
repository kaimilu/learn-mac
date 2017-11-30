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

// map-set与数组和对象的比较
{
  let map = new Map()
  let array = []

  // 增
  map.set('t',1)
  array.push({t:1})

  console.info('map-array', map, array)

  // 查
  let map_exist = map.has('t')
  let array_exist = array.find(item => item.t)

  console.info('map-array', map_exist, array_exist)

  // 改
  map.set('t', 2)
  array.forEach(item => item.t?item.t=2:'')
  console.info('map-arry-modify', map, array)
  
  // 删
  map.delete('t')
  let index = array.findIndex(item => item.t)
  array.splice(index,1)
  console.log('map-array-empty', map, array)
}

console.log('set 与 数组的比较')
// set 与 数组的比较
{
  let set = new Set()
  let array = []

  // 增
  set.add({t:1})
  array.push({t:1})

  console.info('set-array', set, array)

  // 查
  let set_exist = set.has({t:1}) // 是地址，为false
  let array_exist = array.find(item => item.t)
  console.info('set-array', set_exist, array_exist)

  // 改
  set.forEach(item => item.t?item.t=2:'')
  array.forEach(item => item.t?item.t=2:'')
  console.info('set-array-modify', set, array)

  // 删
  set.forEach(item => item.t?set.delete(item):'')
  let index = array.findIndex(item=>item.t)
  array.splice(index,1)
  console.log('set-array-empty', set, array)
}

// map,set,object对比
{
  let item = {t:1};
  let map = new Map()
  let set = new Set()
  let obj = {}

  // 增
  map.set('t',1)
  set.add(item)
  obj['t'] = 1;
  console.info('map-set-obj', obj,map,set)

  // 查
  console.info({
    map_exist: map.has('t'),
    set_exist:set.has(item),
    obj_exist:'t' in obj
  })

  // 改
  map.set('t',2)
  item.t = 2
  obj['t'] = 2
  console.info('map-set-obj-modify', obj, map, set)

  // 删
  map.delete('t')
  set.delete(item)
  delete obj['t']
  console.info('map-set-obj-empty', obj, map, obj)

  // 优先map,考虑唯一性：set ,放弃obj,Array
}