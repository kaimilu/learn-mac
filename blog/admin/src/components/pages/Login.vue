<template>
  <div class="login">
    <el-row type="flex" class="row-bg" justify="center" align="middle">
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <el-form label-position="right" ref="form" :model="form" label-width="40px">
            <p class="align-center" label-width="0">{{title}}</p>
            <el-form-item label="账号">
              <el-input auto-complete="on" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" auto-complete="on" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">登陆</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Api from '../../store/api'

export default {
  name: 'login',
  data() {
    return {
      title: '',
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      Api.login(this.form).then(response => {
        if (response.data.state === 'fail') {
          this.$message({
            message: '登陆失败，请检查帐号与密码',
            duration: 2000,
            type: 'error'
          })
        } else if (response.data.status === 'success') {
          // 2.1 缓存token 和 用户名
          window.localStorage.setItem('token', response.data.token)
          window.localStorage.setItem('username', this.form.name)
          // 2.2 提示成功信息
          this.$message({
            message: '登录成功',
            type: 'success',
            duration: 2000
          })

          // 2.3 记录store状态
          this.$store.dispatch('FETCH_USER', {
            model: 'user',
            query: {},
            username: this.form.name
          }).then(() => {
            // 2.4 路由跳转
            this.$router.push({ path: '/dashboard' })
          })
        }
      }).catch(err => console.error(err))
    }
  },
  mounted() {
    /**
     * https://vuex.vuejs.org/zh-cn/actions.html
     * Action 通过 store.dispatch 方法触发：
     */
    this.$store.dispatch('FETCH_OPTIONS').then(() => {
      console.log(this.title)
      this.title = this.$store.state.siteInfo['title'].value || ''
    })
  }
}
</script>

<!-- 
https://cn.vuejs.org/v2/guide/comparison.html#组件作用域内的-CSS
这个可选 scoped 属性会自动添加一个唯一的属性 (比如 data-v-21e5b78) 为组件内 CSS 指定作用域，
编译的时候 .list-container:hover 会被编译成类似 
.list-container[data-v-21e5b78]:hover。
-->
<style lang="scss" scoped>
.login {
  height: 100%;

  .align-center {
    font-size: 30px;
    text-align: center;
  }

  .el-button--primary {
    width: 100%;
  }

  .row-bg {
    height: 100%;
  }
}
</style>
