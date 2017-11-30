/**
 * 3-18Decorators 修饰器： 是一个函数修改类的行为
 */

 // 限制某个属性是只读的
 {
    let readonly = function(target, name, descriptor) {
      descriptor.writable = false
      return descriptor
    }

    class Test {
      @readonly
      time() {
        return '2017-11-30'
      }
    }

    let test = new Test()

    // test.time = () => console.log('ok') // Cannot assign to read only property 'time' of object
    console.log(test.time()) // 2017-11-30
 }

 {
  let typename = (target, name, descriptor) => {target.myname = 'laosu'}
  let typename1 = function(target, name, descriptor) {
    target.myname = 'laosu'
  }
   
   @typename  // 在class 前面加， 对该类进行修饰
   class Test{

   }

   console.log('类修饰符：', Test.myname)

   // 第三方修饰器的js库：core-decorators; npm i core-decorators
 }

 {
   let log = (type) => {
     return function(target, name, descriptor) {
       let src_method = descriptor.value
       descriptor.value = (...arg) => {
        src_method.apply(target, arg)
        console.log(`log ${type}`)
       }
     }
   }

   class AD{
     @log('show')
     show(){
      console.info('ad is show')
     }
     @log('click')
     click(){
      console.info('ad is click')
     }
   }

   let ad = new AD()
   console.log(ad.show(),ad.click())
 }