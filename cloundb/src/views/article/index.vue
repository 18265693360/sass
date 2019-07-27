<template>
  <div class="container">
    <div id="dom"></div>
    <div class="content markdown" :style="{fontSize:fontSize + 'px'}" v-html="html"></div>
      <div class="btns">
        <i class="iconfont icon-shangyizhang" @click="handleJump('prev')"></i>
        <i class="iconfont icon-mulu" @click="showTitles"></i>
        <i class="iconfont icon-zitijiada" @click="handleAdd"></i>
        <i class="iconfont icon-zitisuoxiao" @click="handleReduce"></i>
        <i class="iconfont icon-xiayizhang" @click="handleJump('next')"></i>
      </div>

    <!--catalog-start  有时候就是要重新写一遍 不知道哪出问题-->
    <div class="title-wrap" v-show="isShowTitles" @click="hideTitles">
      <transition name="slide">
        <ul class="title" v-show="isActive"  @click.stop>
          <li v-for="(item, index) in title" :key="index" class="title-item">
            {{item.title}}
          </li>
        </ul>
      </transition>
    </div>
    <!--catalog-end-->
  </div>
</template>

<script>
  //引入 Showdown 首字母大写需要初始化一个实例
  import Showdown from  'showdown'
  import { Toast, Button, Header } from 'mint-ui';

  export default {
    name: "liu-article",
    data(){
      return{

        title:{},
        // title:{},
        article:{},
        html:'',
        // 定义fontSize
        fontSize:'48',
        //不存在
        // index:'-1',
        index: -1,
        //新的类名注册后使用
        isShowTitles:false,
        isActive:false,
      }
    },
    components:{
      Button,
      Header,
    },

    methods:{
      getArticle (itemId){
        // 执行顺序 保证先拿到book 才能拿到书的目录
        return new Promise((resolve) => {
          const id = itemId?itemId:this.$route.params.id
          this.$axios.get(this.$api.getArticle + id).then( res=>{
            const converter = new Showdown.Converter()
            this.html = converter.makeHtml(res.data.article.content)
            // console.log(res);
            this.article = res.data

            // 负的index index='-1'
            this.index = res.data.article.index
            resolve()
          })
        })
      },
      handleAdd(){
        if (this.fontSize >= 80){
          Toast({
            message: '字体过大',
            position: 'center',
            duration: 1000
          });
        }
        this.fontSize += 2
      },
      handleReduce(){
        if (this.fontSize <= 5){
          Toast({
            message: '字体过小呦亲',
            position: 'center',
            // 时间
            duration: 1000
          });
        }
        this.fontSize -= 2
      },

        getTitles () {
          // const id = this.article.article.bookid  就因为他小写 id
          const id = this.article.article.bookId
          this.$axios.get(this.$api.getTitles + id).then(res =>{
            // 设置跳转到相应页面 地址栏有相对的名字
            this.title = res.data
          })
        },
      // 上一章执行代码
      handleJump(isPrev){
        const _this = this
        function getArticleByIndex(){
          const item = _this.title.find(item => item.index == _this.index)
          const id = item._id
          _this.getArticle(id)
        }
        if (isPrev == 'prev'){
          // 判断是否已经到第一章 提醒
          if (this.index <= 0){
            Toast({
              message: '已经是第一章',
              position: 'bottom',
              duration: 1000
            });
          }else{
            this.index--;
            getArticleByIndex()
          }
        }else {
          if (this.index == this.title.length){
            Toast({
              message: '已经是最后一章了',
              position: 'center',
              duration: 1000
            });
          }else{
            this.index++;
            getArticleByIndex()
          }
        }
      },
      showTitles(){
        this.isShowTitles = true;
        this.isActive = true;
      },
      hideTitles(){
        this.isActive = false;
        setTimeout(()=>{
          this.isShowTitles = false
        },1000)
      }
    },
    created() {
      //Vue中是 取不到dom元素的 但是有方法 延迟加载setTimeOut 还有一种this...
      this.$nextTick(()=>{ //dome 加载完毕后才能加载
        console.log(document.querySelector('#dom'));
      })

      this.getArticle().then(() =>{
       this.getTitles()
      })
    }
  }



</script>

<style scoped lang="scss">
  @import "../../globalCss/px2-rem.scss";

    .btns{
      display: flex;
      justify-content: space-around;
      padding: 10px px-to-rem(18);
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      border-bottom:15px solid #e0e0e0;
      background: #333333;

      .iconfont{
        font-size: 20px;
        color: #e0f2be;
        margin: 10px;
        padding: 10px px-to-rem(10);
      }
    }

  .title-wrap{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0,0,0,.6);
    
    .title{
      transition: transform ease 2s;
      transform: translate3d(-100%,0,0);
      height: 100%;
      width: 80%;
      transform: translate3d(0,0,0);
      background: #ffffff;
      color: #000;

      .title-item{
        padding: 20px px-to-rem(12);
        border-bottom: 1px solid #eee;
      }
      .slide-enter, .slide-leave-to {
        transform: translate3d(-100%,0,0);
      }
      .slide-enter-active, .slide-leave-active{
        transition:transform .5s ease;
      }
    }
  }
</style>

<!--只能在scope外面写样式 为了不影响全局样式 上面content 加了 markdown-->
<style lang="scss">@import "./markdown.scss";</style>

