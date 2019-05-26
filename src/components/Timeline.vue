<template>
  <div class="time-line-div">
    <Timeline>
      <TimelineItem color="blue">
        <p class="time">2019</p>
      </TimelineItem>
      <div v-for="article in articleList">
        <TimelineItem color="green">
          <p class="time">{{transTime(article.createTime)}}</p>
          <router-link :to="{path:'/articleDetail',query: {id: article.id}}">{{article.title}}</router-link>
        </TimelineItem>
      </div>
    </Timeline>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleList: [],
    }
  },
  created() {
    let that = this
    this.$http({
      method: 'post',
      url: 'http://www.wish-hust.cn:7000/api/user/article/query_article_list',
      data: {
        pageNo: 0,
        size: 10
      }
    }).then(function (response) {
      console.log(response);
      that.articleList = response.data.list
      console.log(that.data)
      console.log(that.articleList)
    })
  },
  methods:{
    transTime: function (time) {
      return new Date(time).toLocaleDateString()
    }
  }
}


</script>

<style lang="scss" scoped>
  .time-line-div{
    margin-top: 25px;
  }
</style>
