<template>
  <div class="sider" style="background:#F5F7F9;padding: 20px">
    <Card :bordered="false" shadow>
      <p slot="title">关于我</p>
      <p>刘科 。。。 </p>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'siderDiv',
  data () {
    return {

    }
  }
}

</script>

<style lang="scss" scoped>
  .sider {
    margin: auto;
    overflow: hidden;
  }
</style>
