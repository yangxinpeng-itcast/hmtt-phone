import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.min.js'
import store from './store/index.js'

Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
