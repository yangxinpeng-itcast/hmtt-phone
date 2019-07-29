import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login'
import Home from './views/home'
import tabbarLayout from './views/tabbar-layout'

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
