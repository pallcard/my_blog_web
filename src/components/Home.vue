<template>
  <div style="background:#eee;padding: 20px">
    <Card :bordered="true" :dis-hover="true">
      <p slot="title">标题</p>
      <p>内容</p>
    </Card>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}


</script>

<style lang="scss" scoped>
  /*nav{ width: 1000px; margin: auto; overflow: hidden; padding: 0 0 20px 0 }*/
  /*nav li { display: inline-block; float: left; padding-right:30px;text-align: center; overflow: hidden; line-height: 30px; }*/

</style>
