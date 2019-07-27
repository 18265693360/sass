<!--这个路由也是和其他views文件平级 不和person一个级别-->
<template>
    <div class="container changemsg">

     <div class="nav">
       <div class="nav-item">
       </div>
       <div class="nav-item change">修改个人信息</div>
     </div>

      <!--用户数据存放在Vuex中 相应的vuex也要改变-->
      <!--getUserData:'/user'-->
      <!--changeUser:'/user'-->

        <div class="msg">
        <zj-upload to="#" @success="changeAvatar" class="msg-item">
          <div class="detail head">头像</div>
          <div class="item">
            <img :src="userMsg.user.avatar||fortruth" alt="默认头像" class="img">
            <i class="iconfont icon-fanhui icon1"></i>
          </div>
        </zj-upload>

        <div class="liner"></div>

        <div class="item-name">
          <router-link to="/changeName" class="item-content">
              <div class="detail nickname">昵称</div>
              <div class="item">
                {{userMsg.user.username || userMsg.user.phone}}
                <i class="iconfont icon-fanhui"></i>
            </div>
          </router-link>
        </div>

        <div class="liner"></div>

        <div class="msg-item">
          <div class="detail sign">个性签名</div>
          <div class="item">
            <p>未填写任何内容</p>
            <i class="iconfont icon-fanhui"></i>
          </div>
        </div>

        <div class="liner"></div>

        <div class="item-password">
          <router-link to="/changePassword" class="item-content">
            <div class="detail pass">修改密码</div>
            <div class="item">
              <i class="iconfont icon-fanhui"></i>
            </div>
          </router-link>
        </div>

      </div>
    </div>
</template>

<script>
  import {Button, Toast} from 'mint-ui';
  import liuUpload from '@/components/liu-upload'
  import zjUpload from '@/components/zj-upload'
  import fortruth from '@/assets/fortruth.jpg'



  export default {
    name: "changemsg",
    components: {
      Button,
      zjUpload,
      liuUpload
    },
    data() {
      return {
        fortruth, img: ''
      }
    },
    methods: {
      handleSuccess(val){
        console.log(val);
        this.img = val;
      },
      // 使用改变个人信息的接口
      changeAvatar(url){
                                 // 接口用的地方
        this.$axios.put(this.$api.changeUser,{avatar:url}).then(res =>{
          if (res.code == 200){
            Toast({
              message:'头像修改成功'
            })
            // 此处要匹配store中的action 动作 这是关键 匹配了 store就不会刷新报错
            /*
            * 因为Vuex是一个js插件 每次拿数据都是先从上个页面拿 上个页面
            *用 ajax拿回来 所以刷新一次就没了
            * 做数据持久化 只有用户自己刷新了才能更新数据源
            *
            *Vuex 数据持久化三个方案
            *1。存cookie中
            *2.存 sessionstorage
            * 3.后端存起来 拿的时候用
            * */



            this.$store.dispatch('getUserMsg')
          }
        })
      }
    },
    computed:{
      userMsg(){
        return this.$store.state.userMsg
      }
    }
  }
</script>

<!--老生常言 加 ./-->
<style scoped lang="scss" src="./index.scss"></style>
