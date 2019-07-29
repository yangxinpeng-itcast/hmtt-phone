import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.min.js'
import store from './store/index.js'
import VeeValidate, {
  Validator
} from 'vee-validate'

import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(vant)
Vue.use(VeeValidate)
Validator.localize('zh_CN', zh_CN)

// 自定义验证规则

Validator.extend('phone', {
  getMessage: field => field + '不正确',
  validate: value => {
    // 自己写手机号的验证规则 -> 验证形参value是否符合手机号
    return value.length === 11 && /^((13|15|18|17)[0-9]{1})\d{8}$/.test(value)
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
