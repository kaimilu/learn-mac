/**
 * Promise 解决异步操作问题
 */

// 基本定义 es5
{
  let ajax = function(callback) {
    console.log('执行')
    setTimeout(() => {
      callback&&callback.call()
    }, 1000);
  }
  ajax(function(){
    console.log('timeout1')
  }) 
}

{
  let ajax = function(){
    console.log('执行2')
    return new Promise(function(resolve,reject){
      setTimeout(() => {
        resolve()
      }, 1000);
    })
  }

  ajax().then(function(){
      console.log('promise1','timeout2')
    })
    // .then(function(){
    //   console.log('promise2','timeout3')
    // })
    // .then(function(){
    //   console.log('promise3','timeout4')
    // })
}

{
  let ajax = function(){
    console.log('执行3 ============================')
    return new Promise(function(resolve,reject){
      setTimeout(() => {
        resolve()
      }, 5000);
    })
  }
  ajax()
  .then(function(){
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve()
      }, 2000);
    })
  })
  .then(function(){console.log('xxx')})
}

{
  let ajax = function (num) {
    console.log('执行4')
    return new Promise(function(resolve, reject) {
      if(num > 5) {
        resolve()
      }else{
        throw new Error('出错了！')
      }
    })
  }

  ajax(6)
    .then(function(){
      console.log('log', 6)
    })
    .catch(function(err) {
      console.log('catch', err)
    })

  ajax(3)
    .then(function(){
      console.log('log', 3)
    })
    .catch(function(err) {
      console.log('catch', err)
    })
}

// 所有图片加载完再添加到页面
{
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img')
      img.src = src
      img.onload = function() {
        resolve(img)
      }
      img.onerror = function(err){
        reject(err)
      }
    })
  }

  function showImgs(imgs) {
    imgs.forEach(function(img) {
      document.body.appendChild(img)
    })
  }
  
  // 
  Promise.all([
    loadImg('http://img.hb.aicdn.com/74ad3e9a106280bd4357d96b9e711a58823793d0e673-E72iyB_sq320'),
    loadImg('http://img.hb.aicdn.com/a7a5467ef3d5e4c357521c6a169f75774c2d488927d0-G5Ljbm_sq320'),
    loadImg('http://img.hb.aicdn.com/193436224062b25f767e3e222c447067ca79ed8ba3b3-eGxUF3_sq320')
  ]).then(showImgs)
}

// 有一个图片加载完就添加到页面 其实就不响应了，忽略了
{
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img')
      img.src = src
      img.onload = function() {
        resolve(img)
      }
      img.onerror = function(err){
        reject(err)
      }
    })
  }

  function showImgs(img) {
    let p = document.createElement('p')
    p.appendChild(img)
    document.body.appendChild(p)
  }
  
  Promise.race([
    loadImg('http://img.hb.aicdn.com/74ad3e9a106280bd4357d96b9e711a58823793d0e673-E72iyB_sq320'),
    loadImg('http://img.hb.aicdn.com/a7a5467ef3d5e4c357521c6a169f75774c2d488927d0-G5Ljbm_sq320'),
    loadImg('http://img.hb.aicdn.com/193436224062b25f767e3e222c447067ca79ed8ba3b3-eGxUF3_sq320')
  ]).then(showImgs)
}


