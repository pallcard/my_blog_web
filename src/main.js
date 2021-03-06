// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
import axios from 'axios'
import store from './store/UserStore.js'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(iView)
/* eslint-disable no-new */
// components 是声明有哪些组件
// template 是使用哪个组件
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
