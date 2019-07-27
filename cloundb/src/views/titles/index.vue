<template>

    <div class="container">

      <!--<Header fixed title="目录">-->
        <!--&lt;!&ndash;都可以立即回到首页 但是要返回前面的页面 就需 :to="{name:'页面'}" &ndash;&gt;-->
        <!--<router-link :to="{name:'details'}" slot="left">-->
          <!--<Button icon="back" style="width:68px; font-size: 14px;">返回</Button>-->
        <!--</router-link>-->
      <!--</Header>-->


      <ul class="title" style="margin-top: 30px;">
        <li class="title-item" v-for = "(item,index) in title" :key="index">
          <router-link :to="{name:'article', params:{id: item._id}}">
            <!--{{item.title}}多了一个's'-->
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
  import {Button, Header} from 'mint-ui'

  export default {
    name: "title",
    data(){
      return{
        title:[],
        bookData:{},
      }
    },
    components:{
      Button,
      Header,
    },
    methods:{
      //gitTitles需要api 去接口那里调取 去api中设置
      getTitles () {
        const id = this.$route.params.id
        this.$axios.get(this.$api.getTitles + id).then(res =>{
          // 设置跳转到相应页面 地址栏有相对的名字
          console.log(res);
          this.title = res.data
        })
      },
      getBookData (){
        const id = this.$route.params.id
        this.$axios.get(this.$api.getBook + id).then(res => {
          // 设置跳转到相应页面 地址栏有相对的名字
          let resData = res.data;
          this.bookData = resData;
          document.title = resData.title + '__' + '目录'
        })
      }
    },
    created() {
      this.getTitles()
      this.getBookData()
    }
  }
</script>

<style scoped lang="scss">
  .title-item{
    line-height: 40px;
    height: 40px;
    padding-left: 10px;
    border-bottom:1px solid #e0e0e0;

    a{
      color: #333333;
    }
  }
  //a标签就是 router-link

</style>



