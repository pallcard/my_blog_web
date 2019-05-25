<template>
  <div id="app">
    <div class="nav">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <!--<ul>-->
        <!--<li><router-link to="/home">主页</router-link></li>-->
        <!--<li><router-link to="/article">文章</router-link></li>-->
      <!--</ul>-->
      <header-div/>
    </div>
    <div class="main">
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderDiv from './components/Header'
export default {
  name: 'App',
  components: { HeaderDiv }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
