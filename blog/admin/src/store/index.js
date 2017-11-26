import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

/**
 * https://vuex.vuejs.org/zh-cn/api.html
 * Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式
 */
Vue.use(Vuex)

const store = new Vuex.Store({
  // 单一状态树 ===> https://vuex.vuejs.org/zh-cn/state.html
  state: {
    siteInfo: {},
    list: [],
    curr: {},
    user: {}
  },
  /**
   * Action 类似于 mutation
   * Action 提交的是 mutation，而不是直接变更状态。
   * Action 可以包含任意异步操作。
   * https://vuex.vuejs.org/zh-cn/actions.html
   */
  actions: {
    // 获取图片高度，默认值是100
    GET_IMAGE_HEIGHT: ({ commit, state }, { url }) => {
      return api.getImageHeight(url).then(data => data.height || 100)
    },

    FETCH_USER: ({ commit, state }, { model, query, username }) => {
      return api.fetchList(model, query).then(result => {
        for (let i = 0, len = result.length; i < len; i++) {
          let user = result[i]
          commit('SETUSER', { user })
          break
        }
      })
    },
    FETCH_OPTIONS: ({ commit, state }) => {
      return api.fetchList('option', {}).then(optionArr => {
        let obj = optionArr.reduce((prev, curr) => {
          prev[curr.key] = curr
          return prev
        }, {})
        commit('SET_OPTIONS', { obj })
      })
    }
  },
  // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  // https://vuex.vuejs.org/zh-cn/mutations.html
  mutations: {

    SET_OPTIONS: (state, { obj }) => {
      Vue.set(state, 'siteInfo', obj)
    },
    SET_USER: (state, { user }) => {
      Vue.set(state, 'user', user)
    }
  },
  getters: {}
})

export default store
