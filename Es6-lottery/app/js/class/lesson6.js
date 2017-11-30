/**
 * 3-7数组扩展
 */
console.log('================= 数组扩展 =================')
 {
   let arr = Array.of(3,4,7,9,11);
   console.log('arr=',arr) // [3, 4, 7, 9, 11]

   let empty = Array.of()
   console.log('empty= ', empty) // []
 }

 {
   /**
    * 1.伪数组或者集合转换在数组,
    * 2. 类似与map 映射方法
    */
    let p = document.querySelectorAll('span');
    let spanArr = Array.from(p);
    spanArr.forEach(item => {
      console.log(item.textContent)
    });

    console.log(Array.from([1,3,5], function(item) {
      return item*2
    })) // [2, 6, 10]
    
 }

 {
   /**
    * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
    * 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素
    * arr.fill(value, start, end)
    * value: 用来填充数组元素的值; start :起始索引，默认值为0; end :终止索引，默认值为 this.length
    */
   console.log('fill-7',[1,'a',undefined].fill(7)) // fill-7 (3) [7, 7, 7]
   console.log('fill,pos', ['a','b','c'].fill(7,1,3)) // ["a", 7, 7]
 }

 {
   /**
    * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
    * keys() 方法返回一个新的Array迭代器，它包含数组中每个索引的键
    *
    */
   for (let index of ['1','c','ks'].keys()) {
     console.log('keys', index) // keys 0/1/2
   }
   // 有兼容问题：要index.js 里的兼容包===> babel-polyfill.js
   for (const value of ['1,','c','ks'].values()) {
     console.log('values', value) // values 1/c/ks
   }

   for (const [index, value] of ['1','c','ks'].entries()) {
     console.log('entries', index, value) // entries 0 1 // 1 c // 2 ks
   }
 }

 {
   /**
    * MSN: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
    * copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小
    * arr.copyWithin(target, start, end)
    *
    */
   console.log([1,2,3,4,5].copyWithin(0,3,4)) // [4, 2, 3, 4, 5]
 }

 {
   /**
    * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    * 查找 find() findIndex()
    * find 只找到第一个就不继续找了
    * findIndex 返回符合条件的元素下标
    */
    console.log("大于3的值：",[1,2,3,4,5,6].find(item => item > 3)) // 4
    console.log("大于3的值：",[1,2,3,4,5,6].findIndex(item => item > 3)) // 3
 }

 {
   /**
    * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    */
   // 是否包括某个元素
   console.log('number', [1,2,NaN].includes(1)) // true
   console.log('number', [1,2,NaN].includes(NaN)) // true
 }