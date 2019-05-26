import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Home from '@/components/Home'
import Timeline from '@/components/Timeline'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
    },{
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    },{
      path: '/articleDetail',
      name: 'ArticleDetail',
      component: ArticleDetail
    }
  ]
})
