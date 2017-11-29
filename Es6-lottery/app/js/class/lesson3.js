// 正则
{
  //es5:
  let regex = new RegExp('xyz', 'i')
  let regex2 = new RegExp(/xyz/i)
  
  console.log(regex.test('xyz123'),regex2.test('xyz123')) // true true

  // es6:
  let regex3 = new RegExp(/xyz/ig,'i')
  // flags: 获取正则对象修饰符
  console.log(regex3.flags)
}

{
  /**
   * g,y都是全局匹配
   * 
   */
  let s = 'bbb_bb_b';
  let a1 = /b+/g;
  let a2 = /b+/y;

  console.log('g:',a1.exec(s),a2.exec(s))
  console.log('y:',a1.exec(s),a2.exec(s))

  // 是否开启y模式
  console.log(a1.sticky,a2.sticky) // false true
}

{
  /**
   * u: unicode
   */
  console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'))
  console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'))

  console.log(/\u{61}/.test('a')) // false
  console.log(/\u{61}/u.test('a')) // true

  console.log(`\u{20BB7}`)

  let s = '𠮷';
  // 字符大于两个字符 "." 不能识别，加上u才可以
  console.log('u',/^.$/.test(s)) // false
  console.log('u-2',/^.$/u.test(s)) // true

  console.log('test',/𠮷{2}/.test('𠮷𠮷')); // false
  console.log('test',/𠮷{2}/u.test('𠮷𠮷')); // false

  /**
   * "."修饰符除了大于两个字节的字符不能匹配，还有以下4种：
   * 1. 换行符       \n
   * 2. 回车符       \r
   * 3. 行分隔符
   * 4. 段分隔符
   */

   /**
    * s：该修饰符还没有实现
    */

}