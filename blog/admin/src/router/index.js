import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/pages/Login'

Vue.use(Router)

// https://router.vuejs.org/zh-cn/
export default new Router({
  mode: 'history', // HTML5 History 模式
  scrollBehavior: (to, from, savedPosition) => { // 滚动行为
    return savedPosition || {x: 0, y: 0} // 注意: 这个功能只在 HTML5 history 模式下可用
  },
  routes: [
    {
      path: '/admin/login',
      name: 'login',
      components: {
        default: Login
      }
    },
    {
      path: '/', // 首页 得定向到登录页面
      redirect: '/admin/login'
    }
  ]
})
