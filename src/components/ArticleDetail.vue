<template>
  <div class="article-detail-container">
    <h1 class="title">{{ articleDetail.title}}</h1>
    <div class="counts">
      <span class="views-count">阅读{{articleDetail.browseCount}}</span>
      <span class="comments-count">评论{{articleDetail.commentCount}}</span>
      <span class="likes-count">喜欢{{articleDetail.likeCount}}</span>
    </div>
    <div class="markdown-content" v-html="articleDetail.content"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        articleDetail: ''
      }
    },
    created() {
      console.log("home页")
      let that = this
      this.$http({
        method: 'post',
        url: 'http://www.wish-hust.cn:7000/api/user/article/query_article_detail',
        data: {
          id: this.$route.query.id
        }
      }).then(function (response) {
        console.log(response);
        that.articleDetail = response.data
        console.log(that.articleList)
      })
    }
  }

</script>

<style lang="scss" scoped>
  .article-detail-container {
    margin-top: 25px;
  }

</style>
