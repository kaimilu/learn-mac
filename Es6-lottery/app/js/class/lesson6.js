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