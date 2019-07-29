import Vue from 'vue'
import Router from 'vue-router'

// 正常模式
import Login from './views/login'

// 路由懒加载模式
const Home = () => import ('./views/home')
const tabbarLayout = () => import ('./views/tabbar-layout')

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: tabbarLayout,
      children: [{
        path: '/',
        name: 'home',
        component: Home
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
