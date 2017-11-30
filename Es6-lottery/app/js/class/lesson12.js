/**
 * 3-14类和对象
 * 1.基本方法
 * 2.类的继承
 * 3.静态方法
 * 4.静态属性
 * 5.getter
 * 6.setter
 */

// 1.基本定义和生成实例
{
  class Parent{
    // 1.1: 构造函数
    constructor(name='laosu'){
      this.name=name;
    }
  }
  let v_parent = new Parent('v');
  console.log('构造函数实例：',v_parent)
}

// 2.类的继承
{
  // 父类
  class Parent{
    constructor(name='laosu'){
      this.name=name;
    }
  }

  // 子类
  class Child extends Parent {

  }

  console.log('继承：', new Child())
  
}

// 继承传递参数
{
  class Parent{
    constructor(name='laosu'){
      this.name=name;
    }
  }

  class Child extends Parent {
    constructor(name='child',type) {
      super(name);  // super 继承父类的属性以便修改，且要放在自定义参数前面
      this.type = type;
    }
  }

  console.log('继承：', new Child('wisdom','男'))
  
}

// getter, setter
{
  class Parent{
    constructor(name='laosu'){
      this.name=name;
    }

    // 属性
    get longName() {
      return 'mk' + this.name
    }

    set longName(value) {
      this.name = value
    }
  }
  let v = new Parent();
  console.log('getter', v.longName) // getter mklaosu
  v.longName = 'hello'
  console.log('setter', v.longName)
}

// 类的静态方法
{
  class Parent{
    constructor(name='laosu') {
      this.name = name;
    }

    // 静态方法
    static tell() {
      console.log('tell')
    }
  }

  Parent.tell()  
}

// 类的静态属性
{
  class Parent {
    constructor(name = 'laosu') {
      this.name = name;
    }
    
    static tell() {
      console.log('tell')
    }
  }

  Parent.type = 'test'

  console.log('静态属性：', Parent.type) // 静态属性： test
}