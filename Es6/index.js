let laosu = "老苏aaaa"
let blog = "welcome to my blog! hello " + laosu + "..."
let blog2 = `welcome to my blog! hello ${laosu}...`
document.write(blog)
document.write('<br>')
document.write(blog2)

// 运算
let a11= 1;
let b = 2;
let result = `<br> result:${a11+b}`
document.write(result)

// 字符串查找

document.write('<br> 字符串查找:' + blog2.indexOf(laosu))
document.write('<br> 字符串是否存在:' + (blog2.indexOf(laosu) > 0))
document.write('<br> 字符串是否存在:' + blog2.includes(laosu))
document.write('<br> 是否以某某字符串开始:' + blog2.startsWith(laosu))
document.write('<br> 是否以某某字符串结束:' + blog2.endsWith(laosu))
document.write('<br> 重复某某字符串n次:' + laosu.repeat(3))

