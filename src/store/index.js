//配置vuex,vuex作用是负责组件之间传值的,(传的是复杂的值)

import Vue from 'vue'
import Vuex from 'vuex'

//导入auth中所有内容
import * as auth from '../utils/auth.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user:auth.getUser()
    },
    mutations: {
      setUser (state,data) {
        state.user = data
        auth.setUser(state.user)
      }
    },
    actions: {}
  })

  // 导出store容器
  export default store