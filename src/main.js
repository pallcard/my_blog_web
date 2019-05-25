// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// components 是声明有哪些组件
// template 是使用哪个组件
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
