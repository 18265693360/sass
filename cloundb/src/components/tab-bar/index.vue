<template>
  <div class="loadtop">
    <!--//所有有关boolean值的绑定由 : (v-bind) 否则就会被当做字符串-->
    <Tabbar v-model="selected" :fixed="true">

      <TabItem id="index">
        <!--具名插槽 （具体的名字） -->
        <i class="iconfont icon-yemian-copy-copy-copy-copy" slot="icon" @click="handleJumpS"></i>
        首页
      </TabItem>

      <TabItem id="study">
        <!--具名 （具体的名字） 插槽     solt='icon' 可以让tab-bar有上下样式-->
        <i class="iconfont icon-xuexi-" @click="handleJumpX" slot="icon"></i>
        我的学习
      </TabItem>

      <TabItem id="personal">
        <!--具名 （具体的名字） 插槽-->
        <i class="iconfont icon-renwu" slot="icon" @click="handleJumpR"></i>
        个人中心
      </TabItem>
    </Tabbar>
  </div>
</template>

<script>
  //引入组件
  import { Tabbar, TabItem } from 'mint-ui';
  //引入 两个样式
  //将 .babelrc 修改后就可以移除样式
  // import 'mint-ui/lib/tabbar/style.css';
  // import 'mint-ui/lib/tab-item/style.css'



  // yarn add mint-ui --save
  export default {
    name: "tab-bar",
    props:{
      page: String
    },
    components:{
      //声明相应组件
      Tabbar,
      TabItem,

    },
    //因为v-model所以声明data
    data(){
      return{
        //此处可以引入 默认点亮  和Tabtem一样的ID
        selected: 'index'
      }
    },
    //监控变化 实现跳转  selected值得变化 index 或 personal
    watch:{
      selected(val){
        this.$router.push({
          name:val
        })
      }
    },
    //解决路由跳转问题bug
    created(){
      this.selected = this.$route.name
    },
    methods:{
      handleJumpR(){
        // console.log('今天');
        this.$router.push({
          name:'personal',
        })
      },
      handleJumpX(){
        this.$router.push({
          name:'study'
        })
      },
      handleJumpS(){
        this.$router.push({
          name:'index'
        })
      },
    }
  }
</script>


<style scoped lang="scss">
  /*是iconfont 不是 ioconfont*/
  .iconfont{
    font-size: 26px;
  }
</style>
