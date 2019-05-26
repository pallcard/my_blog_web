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
        this.$http.post('http://localhost:7001//api/user/article/query_article_list',{pageNo: 0,
          size: 10}).then(function (response) {
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
