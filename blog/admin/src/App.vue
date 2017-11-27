<template>
  <div id="app">
    <!-- https://cn.vuejs.org/v2/api/#keep-alive -->
    <!-- 主要用于保留组件状态或避免重新渲染 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import api from './store/api'
import { getChineseDesc } from './utils/error'

export default {
  name: 'app',
  data() {
    return {}
  },
  computed: {
    siteInfo() {
      return this.$store.state.siteInfo
    }
  },
  beforeMount() {
    this.$store.dispatch('FETCH_OPTIONS').then(() => {
      if (this.siteInfo['title'] && typeof document !== 'undefined') {
        document.title = this.siteInfo['title'].value
      }
    })
    const { request } = api
    /**
     * https://ykloveyxk.github.io/2017/02/25/axios%E5%85%A8%E6%94%BB%E7%95%A5/
     * 你可以截取请求或响应在被 then 或者 catch 处理之前
     * 添加请求拦截器
      */
    request.interceptors.request.use((config) => {
      // 1. 获取token
      const token = window.localStorage.getItem('token')
      // 2. get请求 并且 不url 不是'/api/user' 时不拦截
      if (config.method === 'get' && config.url.indexOf('/proxyPrefix/api/user') === -1) {
        return config
      }
      // 3. 如果token 存在 并且 token 不为'underfined'时, 给请求头‘authorization’赋值token
      if (token !== null && typeof token !== 'undefined') {
        config.headers['authorization'] = token
      }
      return config
    }, (error) => Promise.reject(error))

    /**
     * 添加响应拦截器
     */
    request.interceptors.response.use((response) => {
      if (this.$store.state.route.name === 'logout') {
        return response
      }
      if (response.data && response.data.status && response.data.status === 'fail') {
        let desc = getChineseDesc(response.data.description)
        this.$notify.error(desc)
        return Promise.reject(desc)
      }
      return response
    }, (error) => Promise.reject(error))
  }
}
</script>

<style lang="scss" >
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0px;

  #app {
    height: 100%;
  }
}
</style>
