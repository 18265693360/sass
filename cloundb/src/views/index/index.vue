<template>
  <div class="container">
    <Loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore">
      <!--:bottom-all-loaded="allLoad" 检查全部加载完毕没有 是个变量-->
      <!--<ul>-->
        <!--<li v-for="item in list">{{ item }}</li>-->
      <!--</ul>-->
      <MySwiper />
      <div class="content">
        <ContentItem v-for="(item, index) in contentData"
                     :options="item"
                     :key="index" />
      </div>
    </Loadmore>
  </div>
</template>

<script>
  import MySwiper from '@/components/my-swiper'
  import ContentItem from './components/contentItem'
  // 引入时间
  import moment from 'moment'
  //引入Loadmore下拉刷新
  import { Loadmore } from 'mint-ui';


  // import:引入   export:对外输出本模块   export default:
  // export与export default均可用于导出常量、函数、文件、模块等
  // 通过export方式导出，在导入时要加{ }，export default则不需要
  export default {
    name: "index",
    // components:构成要素 声明组件的作用
    components: {
      MySwiper,
      ContentItem,
      //注册组件
      Loadmore
    },
    data() {
      return {
        contentData: [],
        // 获取首页数据
        queryData: {
          //第一页
          pn: 1,
          //显示书本数
          booksSize: 2,
          size: 2,
        },
        //默认 false 未加载完毕
        allLoaded: false
      }
    },
    // 获取数据的行为
    methods: {
      getContent() {
        //此处((resolve{    }))
        return new Promise((resolve) => {
          this.$axios.get(this.$api.getContent, {
            params: this.queryData
          }).then(res => {
            // let resData = res.date;
            //错了
            let resData = res.data;
            //判断   size分类的大小 如果分类到最小那就是没了
            // 当需要加载的数据小于原来的数据没那就结束加载
            if (resData.length < this.queryData.size) {
              this.allLoaded = true //已经加载完成了
            }
            resData = resData.map(item => {
              //books 和接口处的最后一个一样
              item.books = item.books.map(it => {
                it.updateTime = moment(it.updateTime).format('YYYY年M月D日')
                return it
              })
              return item
            })
            //concat(ES5) 数组拼接  格式：数组.concat(this.原来的数据，resData)
            this.contentData = [].concat(this.contentData,resData)
            //数组展开运算符（ES6）  作用拼接字符串 格式【...原来的数据，...拼接的数据】
            // this.contentData = [...this.contentData, ...resData]
            // this.contentData = resData 这是直接赋值
            resolve()
          })
        })
      },
      //上拉加载新的内容
      loadTop(){
        this.queryData = {
          //第一页
          pn:1,
          booksSize:4,
          size:4,
        }
        //有了下拉加载  参数就应该变了 变成未加载完 false
        this.allLoaded = false;
        this.getContent().then(()=>{
          this.$refs.loadmore.onTopLoaded()
        })
      },
      //下拉刷新
      loadBottom(){
        this.queryData = {
          pn:this.queryData.pn+1,
          booksSize:2,
          size:2,
        };
        //获取相应内容 加载完成后就用这个方法
        this.getContent().then(()=>{
          this.$refs.loadmore.onBottomLoaded()
        })
      }
      },
      // 钩子调用方法
      created() {
        this.getContent()
        // 时间模块moment用法
        // let str = "2018-11-07T11:35:35.480Z"
        // console.log(moment(str).format('YYYY年M月D日'));
      }
    }
</script>

<style scoped lang="scss">
  @import '../../globalCss/px2-rem';

  .container {
    padding: px-to-rem(18);
    padding-bottom: 60px;
  }



          // 传参
          // params:{
          // books 和接口处一样
          // booksSize:2,
          // size:4
        //   }
        // }).then(res => {
          //时间引入
          // let resData = res.data;


       //一点不能多 一点不能少  不然显示 Module build failed:  组件创建失败
          /*})*/

</style>
