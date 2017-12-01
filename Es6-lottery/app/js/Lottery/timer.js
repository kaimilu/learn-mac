/**
 * 时间类
 */

class Timer{
  /**
  * 
  * @param {结束时间} end 
  * @param {时间更新的回调} updated 
  * @param {倒计时结束后的回调} handle 
  */
  countdown(end, updated, handle) {
    const now = new Date().getTime() // 当前时间的时间搓
    const self = this

    if(now < end) {
      handle.call(self) // 执行倒计时结束的回调
    }else{
      let last_time = end - now // 计算剩余时间
      let px_d = 1000*60*60*24  // 1天的毫秒数
      let px_h = 1000*60*60     // 1小时毫秒数
      let px_m = 1000*60        // 1分钟毫秒数
      let px_s = 1000           // 1秒。。。。
      let d = Math.floor(last_time/px_d)                        // 剩余多少天
      let h = Math.floor((last_time-d*px_d)/px_h)               // .......小时
      let m = Math.floor((last_time-d*px_d-h*px_h)/px_m)        // .......分钟
      let s = Math.floor((last_time-d*px_d-h*px_h-m*px_m)/px_s) // .......秒
      let r = []
      if(d>0) {
        r.push(`<em>${d}</em>天`)
      }
      if(r.length || h>0){
        r.push(`<em>${h}</em>时`)
      }
      if(r.length || m>0){
        r.push(`<em>${m}</em>分`)
      }
      if(r.length || s>0){
        r.push('<em>${s}</em>')
      }
      self.last_time = r.join('')   // 赋值转换后的数据
      updated.call(self,r.join('')) // 调用更新回调
      setTimeout(() => {            // 一秒循环一次
        self.countdown(end, updated, handle)
      }, 1000);
    }
  }
}