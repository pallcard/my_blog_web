<template>
  <div>
    <Button v-on:click="testOnclick">test</Button>
    <h1>{{this.$store.getters.getCityFn}}</h1>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
    <Button v-on:click="testOnclick2">test</Button>
  </div>
</template>

<script>
  import store from '@/store/UserStore'
  export default {
    name: 'headerDiv',
    data () {
      return {
        value: ''
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
      },
      testOnclick2: function () {
        console.log("111")

        this.$store.dispatch("setCityName",this.value)
        // this.$store.commit("setCity",this.value)
      }
    }
  }
</script>

<style lang="scss" scoped>


</style>
