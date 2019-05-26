<template>
  <div style="background:#F5F7F9;padding: 20px">
    <div v-for="article in articleList">

      <router-link :to="{path:'/articleDetail',query: {id: article.id}}">
        <Card :bordered="true" :dis-hover="true" style="margin-bottom: 20px">
          <p slot="title">{{article.title}}</p>
          <p class="context">{{article.content}}</p>
        </Card>
      </router-link>
    </div>
    <template>
      <Page :total="totalNum" />
    </template>
  </div>

</template>

<script>
export default {
  data () {
    return {
      totalNum: 1,
      articleList: [],
    }
  },
  created() {
    console.log("home页")
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
      that.totalNum = response.data.totalNum
      that.articleList = response.data.list
      console.log(that.data)
      console.log(that.articleList)
    })
  }
}


</script>

<style lang="scss" scoped>
  .context{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
