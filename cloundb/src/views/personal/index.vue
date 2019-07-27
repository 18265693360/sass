<template>
  <div class="personal">

    <div class="top-box">
      <router-link class="login-box" v-if="!userMsg.user" :to="{name:'login'}">
        <div class="top1-left">
          <h1>立即登录</h1>
          <div class="desc">
            时光回头,当下最重要
          </div>
        </div>
        <div class="top1-right">
          <img src="@/assets/avatar_default.jpg" alt="">
          <!--实际开发中<img src="@/assets/avatar_default.jpg" alt="" 添加类名class="avaert">-->
          <i class="iconfont icon-fanhui"></i>
        </div>
      </router-link>

      <div class="login-box user-box" v-else>
        <div class="top1-left">
          <h1>{{userMsg.user.username || userMsg.user.phone}}</h1>
          <div class="desc">
            {{userMsg.user.desc || '用户尚未填写'}}
          </div>
        </div>
        <div class="top1-right">
          <img :src="userMsg.user.avatar || fortruth " alt="">
          <!--实际开发中<img src="@/assets/avatar_default.jpg" alt="" 添加类名class="avaert">-->
        </div>
      </div>



      <div class="collection-data">
        <div class="collection-item">
          <div class="title">
            {{userMsg.read}}
            <span class="little-title">本</span>
          </div>
          <div class="desc">
            已读图书
          </div>
        </div>

        <div class="collection-item">
          <div class="title">
            {{userMsg.collection}}
            <span class="little-title">本</span>
          </div>
          <div class="desc">
            已收藏图书
          </div>
        </div>

        <div class="collection-item">
          <div class="title">
            {{userMsg.like}}
            <span class="little-title">本</span>
          </div>
          <div class="desc">
            喜欢
          </div>
        </div>
        <i class="col-line"></i>
        <i class="col-line"></i>
      </div>

    </div>


    <div class="middle-box">
      <div class="box3-item" @click="hundleJumpC">
        <div class="item1">
          <i class="iconfont icon-xiugaigerenxinxi "></i>
          <span>修改个人信息</span>
        </div>
        <div class="item2"><i class="iconfont icon-xiayizhang "></i></div>
      </div>

      <div class="box3-item">
        <div class="item1">
          <i class="iconfont icon-jiazhi "></i>
          <span>收藏书单</span>
        </div>
        <div class="item2"><i class="iconfont  icon-xiayizhang "></i></div>
      </div>

      <div class="box3-item">
        <div class="item1">
          <i class="iconfont icon-aihao- "></i>
          <span>喜欢的书</span>
        </div>
        <div class="item2"><i class="iconfont icon-xiayizhang "></i></div>
      </div>

    </div>
    <Button class="logout" type="danger" size="large">退出登录</Button>
    <!--<Button icon="more">更多</Button>-->
    <!--<Button icon="back">返回</Button>-->
    <!--<Button plain>plain</Button>-->
    <!--<Button disabled="">plain</Button>-->
  </div>
</template>

<script>
  import { Button } from 'mint-ui';
  // 解决默认头像 以字符串的形式展示
  import fortruth from '@/assets/fortruth.jpg'
  import DyTabbar from '@/components/tab-bar'

  export default {
    name:'personal',
    components:{
      DyTabbar,
      Button,
    },
    data(){
      return{
        fortruth
      }
    },

    methods:{
      hundleJumpC(){
        this.$router.push({
          name:'changemsg'
        })
      }
    },
    // methods:{
    //   getUserMsg(){
    //     this.$axios.get(this.$api.user).then(res =>{
    //       // console.log(res);
    //       // 定义数据
    //       this.userMsg = res.data
    //     })
    //   }
    // },
    created() {
      let token = localStorage.getItem('token')
      if (token){
        this.$store.dispatch('getUserMsg')
      }
    },
    // 没了 一定要有computed
    computed:{
      userMsg(){
        return this.$store.state.userMsg
      }
    }
  }
</script>

<!--解耦合：就是这个页面的样式要随用随有 所以要引入-->
<style scoped lang="scss" src="./index.scss"></style>
