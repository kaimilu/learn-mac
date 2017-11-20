let a = 1;
console.log(a);

// var 
// let
// const

(function(){
  var ls = "laosu"
  window.onload = function(){
    console.log(ls)
  }
})('申明方式1 => var')

;(function(){
  var b = "laosu"
  {
    let b = "老苏"
  }
  console.log(b)
})('申明方式 => let')

;(function(){
  for(var i =0; i< 10; i++){
    console.log(i)
  }
  console.log("循环体外：" + i)
})()