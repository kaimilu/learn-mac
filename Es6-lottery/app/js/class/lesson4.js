/**
 * 4 字符串扩展（上）
 */
{
  console.log('a',`\u0061`) // a a
  // 当大于2个字节 超过了0xFFFF
  console.log('s', `\u20BB7`) // s ₻7

  console.log('s','\u{20BB7}')
  
}

{
  let s = '𠮷'
  console.log('length', s.length) // es5: 长度为2

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
   */
  console.log('8',s.charAt())  //  取第一个位置的字符
  console.log('1',s.charAt(1))  // 
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
   */
  console.log('at1',s.charCodeAt(0)) // 取码值
  console.log('at1',s.charCodeAt(1)) // 57271

  let s1 = '𠮷a';
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
   */
  console.log('length:', s1.length) // 3
  console.log('code0', s1.codePointAt(0)) //134071
  console.log('code0', s1.codePointAt(0).toString(16)) //20bb7
  console.log('code1', s1.codePointAt(1)) // 57271
  console.log('code2', s1.codePointAt(2)) // 97
}

{
  console.log(String.fromCharCode("0x20bb7")) // es5 ஷ
  console.log(String.fromCodePoint("0x20bb7")) // es6 𠮷
}

{
  // 字符串遍历器
  let str = '\u{20bb7}abc'
  for (let i=0; i<str.length; i++) {
    console.log('es5 ',str[i]) // � � a b c
  }

  for (let item of str) {
    console.log('es6', item) // 𠮷 a b c
  }
}

// 3-5字符串扩展（下）
{
  // 包含、起始、结尾
  let str = 'string';
  console.log(str.includes('r'))    // true
  console.log(str.startsWith('s'))  // true
  console.log(str.endsWith('s'))    // false
  console.log(str.endsWith('g'))    // true
}

{
  // 重复n次
  let str = 'laosu'
  console.log(str.repeat(6))
}

{
  // 模板字符串
  console.log('=================== 模板字符串 ======================')
  let name = 'list'
  let info = 'hello world'
  let m = `i am ${name}, ${info}`
  console.log(m) // i am list, hello world
}

{
  // es7 草案
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
   * 从当前字符串的开头（左侧）开始填充
   */
  console.log('1'.padStart(2,'0')) // 补白
  console.log('1'.padEnd(2,'0'))
}

{
  // 标签模板
  console.log('标签模板：')
  
  let user = {
    name: 'list',
    info: 'hello world'
  }

  console.log(abc`i am ${user.name}, ${user.info}`) // i am ,, ,listhello world
  function abc(s,v1,v2) {
    console.log(s,v1,v2)
    return s+v1+v2
  }
}

{
  console.log(String.raw`Hi\n${1+2}`) // Hi\n3
  /**
   * H1
      3
   */
  console.log(`H1\n${1+2}`) 
}