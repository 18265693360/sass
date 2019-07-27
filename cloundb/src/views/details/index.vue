<template>
  <div class="container">

    <!--<Header fixed title="文章详情页">-->
      <!--<router-link to="/index" slot="left">-->
        <!--&lt;!&ndash;要设置宽度 不然就不会在左边 因为样式中有 /deep/样式所以导致样式被覆盖 以后将子样式写在父元素中 不然无法改别的样式&ndash;&gt;-->
        <!--<Button icon="back" style="width:68px; font-size: 14px;">返回</Button>-->
      <!--</router-link>-->
    <!--</Header>-->


    <div class="book">
      <!--book start-->
      <div class="book-left">
        <!--忘了 绑定属性 v-bind == : 所以不出图-->
        <img :src="bookData.img" :alt="bookData.img" class="img">
      </div>
      <div class="book-right">
        <h2 class="title">
          {{bookData.title}}
        </h2>
        <div class="book-msg">
          <div class="author">
            作者:{{bookData.author}}
          </div>
          <div class="looksnums">
            {{bookData.status}}:在看
          </div>
          <div class="like">
            {{bookData.startsnums}}:人喜欢
          </div>
        </div>
      </div>
      <!--book end-->
    </div>
    <!--Button start-->
    <div class="btns">
      <!--大写的Button 大的按钮比较好 小的不出收藏样式-->
      <Button size="small">加入收藏</Button>
      <Button size="small">分享好友</Button>
    </div>
    <!--Button end-->
    <div class="line"></div>
    <div class="book-title">
      {{bookData.title}}
    </div>
    <!--desc才出样式-->
    <div class="book-desc">
      {{bookData.desc}}
    </div>

    <div class="show-title">
      <h2 class="title">
        查看目录
        <span>共{{totalTitles}}章</span>
      </h2>
      <div class="data">
        {{bookData.updateTime}}
      </div>
    </div>
    <div class="line"></div>


    <!--adj.primary	首要的，主要的; 最早的，原始的; [地质学] 原生的; 基本的;-->
    <!--n.	第一位; 最好者; 要素; 候选人提拔会;-->
    <div class="read-btn">
      <Button  type="primary" size="large" @click="handleJump" >阅读该书籍</Button>
    </div>

  </div>
</template>

<script>
  //加入按钮
  import {Button, Header} from 'mint-ui'
  //引入时间
  import moment from 'moment'

  export default {
    name: "liu-details",
    //引入按钮
    components:{
      Button,
      Header,
    },
    //details已经作为一个标签 不能用details引入
    data(){
      return{
        bookData:[],
        // titlesData:0, 就是这里
        totalTitles:[],

      }
    },
    methods:{
      getBookData(){
         // const id = this.$api.$route.params.id 多出了$api
         const id = this.$route.params.id
                                            //上面定义 id 下面获取ID 地址栏只有api
           this.$axios.get(this.$api.getBook + id).then(res =>{
          // console.log(res);
             let resData = res.data
             resData.updateTime = moment(resData.updateTime).format('YYYY年M月D日')
          //    this.bookData = res.data;
             this.bookData = resData
             this.totalTitles = res.length
        })
      },
      handleJump(){
        this.$router.push({
          name:'title',
          params:{
            id: this.bookData._id
          }
        })
      }
    },
    created() {
      this.getBookData()
    }
  }
</script>

<style scoped lang="scss" src="./index.scss"></style>


<style>
  /*写组件的样式两个方案  */
  /*1.style标签中没有 scope 就可以

   2.深度选择器
  /deep/ .mint-button-text{
    color: #555555;
  }

  */
  /*.btns .mint-button-text{*/
    /*font-size: 20px;*/
    /*color: #555555;*/
  /*}*/
</style>
