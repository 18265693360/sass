<!--<template>-->
<!--<template>-->
<!--<div class="read-item">-->
<!--<div class="read-left" v-for="(it, index) in options.book" :key="index">-->
<!--&lt;!&ndash;记得绑定 v-bind 绑定两个src alt 这样it 才不会undefined&ndash;&gt;-->
<!--<img src="#" alt="">-->
<!--</div>-->
<!--<div class="read-right">-->
<!--<div class="title">-->

<!--</div>-->
<!--<div class="where">-->
<!---->
<!--</div>-->
<!--<div class="last-msg"></div>-->
<!--<div class="btns">-->
<!--<Button type="default" size="small">继续阅读</Button>-->
<!--<Button type="default" size="small">查看文档</Button>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--name: "readListData",-->
<!--props:{-->
<!--options:Object-->
<!--},-->
<!--created() {-->
<!--console.log(this.options);-->
<!--},-->
<!--}-->
<!--</script>-->
<!--<style scoped lang="scss" src="./index.scss"></style>-->
  <!--<div class="container study">-->
    <!--<div class="text">我的学习</div>-->
    <!--<div class="read">-->
      <!--<ReadListData v-for="(item,index) in readListData"-->
                        <!--:options="item"-->
                        <!--:key="index"/>-->
    <!--</div>-->
    <!--&lt;!&ndash;这是引入的底部tap-bar&ndash;&gt;-->
    <!--<DyTabbar page="study"></DyTabbar>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--import ReadListData from './components/readListData'-->
  <!--import { Button } from 'mint-ui';-->
  <!--import DyTabbar from '@/components/tab-bar'-->
  <!--import moment from 'moment'-->
  <!--// 这是引入的tab-bar-->
  <!--export default {-->
    <!--name: "study",-->
    <!--// 定义父子传值-->
    <!--props:{-->
      <!--options:Object-->
    <!--},-->
    <!--components:{-->
      <!--// 声明的tab-bar-->
      <!--ReadListData,-->
      <!--DyTabbar,-->
      <!--Button-->
    <!--},-->
    <!--data(){-->
      <!--return{-->
        <!--readListData:[]-->
      <!--}-->
    <!--},-->
    <!--methods:{-->
      <!--getReadList(){-->
        <!--this.$axios.get(this.$api.getReadList).then(res=>{-->
          <!--this.readListData = res.data-->
          <!--// 打印数据-->
          <!--console.log(res);-->
        <!--})-->
      <!--}-->
    <!--},-->
    <!--created() {-->
      <!--this.getReadList()-->
    <!--}-->
  <!--}-->
<!--</script>-->
<!--<style scoped lang="scss">-->
<!--</style>-->
<template>
  <!--注意这里的 my-learn在引号中间-->
  <div class="container my-learn">
    <div class="my-learn-item" v-for="(item, index) in arr" :key="index" >
      <div class="img-wrap">
        <img :src="item.book.img" alt="">
      </div>

      <div class="book-msg">
        <h2 class="title">
          {{item.book.title}}
        </h2>
        <div class="read-msg">
          书籍{{item.title.index + 1}}/{{item.title.total}}章节
        </div>
        <div class="progress-wrap">
          <div class="progress-box" style="flex:1">
          <read-progress :total="100" :value="value"></read-progress>
          </div>
          <read-progress  :value="20" :bar-height="5" style="background: lawngreen;"></read-progress>
          <div class="progress-item">
            已看{{(item.title.index/item.title.total).toFixed(2)*100 + ''}}%
          </div>
        </div>
        <div class="recent-read-item">
          <div class="recent-read">
            上次查看:{{item.title.title}}
          </div>

          <!-- 这里才是组件位置<div class="recent-read-day">-->
            <!--13天前-->
          <!--</div> -->
          <div class="recent-read-day">
            <recent-read :value="item.updateTime || 123" />
          </div>

        </div>
        <div class="btns-wrap">
          <Button type="default" size="small">继续阅读</Button>
          <Button type="default" size="small">查看文档</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Button} from 'mint-ui';
  import readProgress from '@/components/read-progress';
  import recentRead from '@/components/recent-read';

  export default {
    name: "index",
    data(){
      return{
        value:80,
        // time: new Data 人家这里就是'date' ('2019-04-01T03:56:59.418Z')
        time: new Date('2019-04-01T03:56:59.418Z'),
        arr:[]
      }
    },
    components:{
      Button,
      // Progress,  多出来的 什么时候加上的 之后报错 要看看命名注册这里
      readProgress,
      recentRead
    },
    methods:{ //获取服务端数据
      getData(){
        this.$axios.get(this.$api.getReadList).then(res=>{
          if (res.code == 200){
            this.arr = res.data.map(item => item)
          }
        })
      }
    },
    created(){
      // this.getDate() 是getData
      this.getData()
    },
  }
</script>

<style scoped lang="scss" src="./index.scss"></style>


