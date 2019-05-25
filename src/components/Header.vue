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
      text-align: center;
      overflow: hidden;
      line-height: 30px;
    }
    li:hover {
      font-weight:bold;
    }
    .clear-box{
      clear: left;
    }
  }
  /*nav{ width: 1000px; margin: auto; overflow: hidden; padding: 0 0 20px 0 }*/
  /*nav li { display: inline-block; float: left; padding-right:30px;text-align: center; overflow: hidden; line-height: 30px; }*/
  /* header */
  /*header { width: 100%; overflow: hidden; }*/
  /*.logo { width: 1000px; margin: auto; font-size: 26px; padding: 70px 0 20px 0; -webkit-text-shadow: 1px 1px 1px rgba(255,255,255,.2); -moz-text-shadow: 1px 1px 1px rgba(255,255,255,.2); text-shadow: 1px 1px 1px rgba(255,255,255,.2); }*/
  /*.logo a { color: #222 }*/
  /*nav{ width: 1000px; margin: auto; overflow: hidden; padding: 0 0 20px 0 }*/
  /*nav li { display: inline-block; float: left; padding-right:30px;text-align: center; overflow: hidden; line-height: 30px; }*/
  /*nav li a { color: #000; }*/
  /*a#selected,nav li a:hover { font-weight:bold  }*/
  /*.mnav{ width:100%; background:#000; line-height:40px; height:40px; text-align:center;  position:fixed; bottom:0; display:none; z-index:9999999}*/
  /*.mnav li{ display:inline; padding:0 5px}*/
  /*.mnav li a{ color:#FFF}*/
</style>
