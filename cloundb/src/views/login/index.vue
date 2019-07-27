<template>
    <div class="container login">
     <div class="logo">
       <i class="iconfont icon-shuben"></i>
     </div>
      <div class="input-wrap">
        <liu-input v-model="formData.phone" placeholder="请输入您的手机号码"></liu-input>
        <liu-input v-model="formData.password" placeholder="请输入您的密码" :type="type">
          <i class="iconfont icon-biyan" @click="toggleType" :class="{'icon-zhucedenglu-chakanmima-zhengyan' : type == 'text'}" slot="icon"></i>
        </liu-input>
      </div>
      <div class="router-wrap">
        <router-link to="/register">没有账号？立即注册</router-link>
      </div>
      <Button type="primary" size="large" style="margin-top: 36px" @click="handleJumpDD">立即登录</Button>
    </div>
</template>

<script>
  import liuInput from '@/components/liu-input'
  import {Button, Toast} from 'mint-ui'
  import validator from 'validator'

    export default {
        name: "login",
        components:{
          // 注册类名
          liuInput,
          Button
        },
      data(){
          return{
            formData:{
              phone:'',
              password:''
            },
            // 二级声明
            type: 'password'
          }

      },
      methods:{
        toggleType(){
          this.type = this.type == 'password'? 'text':'password'
        },
        //  验证用户信息 handleJumpDD(){
        //   this.$router.push({
        //     name:'index'
        //   })
        // }
        handleJumpDD(){
          let phoneStatus = validator.isMobilePhone(this.formData.phone,'zh-CN')
          let passwordStatus = validator.isLength(this.formData.password,{min:3})
          if (phoneStatus&&passwordStatus){
            // this.$axios.post(this.$api.login.这里是一逗号this.formData).then(res => {
            this.$axios.post(this.$api.login,this.formData).then(res => {
              if (res.code == 200){
                // 存储token的数据 然后去ajx中设置 每次请求fetch
                let token = res.token
                localStorage.setItem('token',token)
                Toast({
                  message:'登录成功'
                })
                setTimeout(()=>{
                  this.$router.push({
                    name:'personal'
                  })
                },1000)
              }else {
                Toast({
                  message:res.msg
                })
              }
            })
          }else {
            Toast({
              message:"不是合法的手机号码/密码错误"
            })
          }
        }
      },
      created() {
      }
    }
</script>
              <!--要加'./'-->
<!--<style scoped lang="scss" src="index.scss"></style>-->
<style scoped lang="scss" src="./index.scss"></style>

