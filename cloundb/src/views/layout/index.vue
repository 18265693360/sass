<template>
    <div>
      <router-view />
      <!--<DyTabbar page="index"></DyTabbar>> 多一个>-->
      <DyTabbar page="index"></DyTabbar>
    </div>
</template>

<script>
  /*
  * 第一步
  *  export default{
  *     name:"tab-bar"
  *  }
  * */


  /*
  * 局部引入
  * import 'mint-ui/lib/tabbar/style.css'
  * import 'mint-ui/lib/tab-item/style.css'
  * import {Tabbar, TabItem} from 'mint-ui'
  *
  * export default {
  *  name:'tab-bar',
  *  components:{
  *   声明相应组件
  *     Tabbar,
  *     TabItem
  *  }
  * }
  * */

  //起名字不要my开头
  //将lab-tab引入 router-view
    import DyTabbar from '@/components/tab-bar'


    export default {
      name: "layout",
      components:{
          DyTabbar

      }
    }

    // 嵌套路由实现 tab-bar 页面底部类似购物车 收藏的部分
    // Mint-Ui 文档搭配 tab-bar
</script>

<style scoped>

</style>
