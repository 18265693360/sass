<template>
  <div class="content-item">
    <div class="content-item-row1">
      <h2 class="title">
        {{options.title}}
      </h2>
      <router-link to="#">更多...</router-link>
    </div>
    <div class="content-item-row2" v-for="(it, index) in options.books" :key="index">
      <div class="img-wrap">
        <img :src="it.img" :alt="it.img" class="img">
      </div>
      <div class="article">
        <div class="article-title">
          {{it.title}}
        </div>
        <div class="article-preview">
          {{it.desc}}
        </div>
        <!--msg 短信息就是描述这本书的一些信息 阅读人数 作者 收藏人数-->
        <div class="article-msg">
          <div class="author">
            {{it.author}}
          </div>
          <div class="date">
            {{it.updateTime}}
          </div>
          <div class="looknums">
            {{it.looknums}}人在看
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contentItem",
    props: {
      options: Object
    },
    // 获取第二次数据结构的地方
    created () {
      console.log(this.options);
    }
  }
</script>

<style scoped lang="scss" src="./index.scss"></style>
