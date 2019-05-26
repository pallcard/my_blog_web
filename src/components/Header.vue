<template>
  <div class="header">
    <div id = "logo"></div>
    <ul>
      <li v-for="nav in navs">
        <router-link :to="nav.href">{{nav.context}}</router-link>
      </li>
    </ul>
    <div class="clear-box"></div>
  </div>
</template>

<script>
export default {
  name: 'headerDiv',
  data () {
    return {
      navs: [
        {context: '首页', href:'/home'},
        {context: '文章', href:'/article'},
        {context: '归档', href:'/home'}
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
  .header {
    width: 1000px;
    margin: auto;
    overflow: hidden;
    padding: 0 0 20px 0;
    li {
      display: inline-block;
      float: left;
      padding-right:30px;
      padding-left: 30px;
      text-align: center;
      overflow: hidden;
      a {
        color: #ffffff;
      }
    }
    li:hover {
      font-weight:bold;
      background-color: #57a3f3;
    }
    .clear-box{
      clear: left;
    }
  }
</style>
