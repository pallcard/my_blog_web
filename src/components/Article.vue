<template>
  <div>
    <Button v-on:click="testOnclick">test</Button>
  </div>
</template>

<script>
export default {
  name: 'headerDiv',
  data () {
    return {
    }
  },
  methods: {
    testOnclick: function () {
      console.log("111")
      this.$http({
        method: 'get',
        url: 'http://localhost:7001/api/v1/home/banners',
      }).then(function (response) {
          console.log(response);
        })
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
