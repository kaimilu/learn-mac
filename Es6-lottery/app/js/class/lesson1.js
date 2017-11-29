function test() {
  // var a = 2
  // let a = 1
  // console.log(a)

  // for(let i=1; i<3; i++) {
  //   console.log(i)
  // }
  // console.log(i)

  // let a = 1
  // let a = 2
  /**
   * let 块作用域 
   * 严格模式：未定义的变量不能使用
   * let 不能定义同一个变量多次
   */
}
function last() {
  /**
   * const 常量
   * 1. 常量不能修改
   * 2. 声明时必须赋值
   * 3. 常量是引用类型，值是可以修改的
   */
  const PI = 3.1415926
  // PI = 8; // 常量不能修改，只读：“PI" is read-only
  const k = {
    a:1
  }
  k.b=3
  k.laosu = '老苏'
  console.log(PI,k)
}

test()
last()