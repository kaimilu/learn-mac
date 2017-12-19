import $ from 'jquery'

class Interface {
  /**
   * 获取遗漏值
   * @param {*当前期号} issue 
   */
  getOmit(issue) {
    let self = this // 保存this 引用
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/omit',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function(res) {
          self.setOmit(res.data)  // 保存返回的数据
          resolve.call(self, res) // 结果传给resolve() 供下一步.then()操作
        },
        error: function(err) {
          reject.call(err)
        }
      })
    })
  }

  /**
   * 获取开奖号码
   * @param {string} issue 期号
   */
  getOpenCode(issue) {
    let self = this
    return new Promise((resolve, rejetc) => {
      $.ajax({
        url: '/get/opencode',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function(res) {
          self.setOpenCode(res.data)
          resolve.call(self, res)
        },
        error: function(err) {
          rejetc.call(err)
        }
      })
    })
  }

  /**
   * 获取当前状态
   * @param {string} issue 期号
   */
  getState(issue) {
    let self = this
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/state',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function(res) {
          resolve.call(self, res)
        },
        error: function(err) {
          reject.call(err)
        }
      })
    })
  }

}

export default Interface