import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/article',
      name: 'Article',
      component: Article
    }
  ]
})
