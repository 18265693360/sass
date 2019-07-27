<template>
  <div class="container register">
    <div class="logo">
      <i class="iconfont icon-shuben"></i>
    </div>
    <div class="input-wrap">
      <liu-input v-model="formData.phone" placeholder="请输入您的手机号码">
        <i class="iconfont icon-shouji" slot="icon"></i>
      </liu-input>
      <liu-input v-model="formData.password" placeholder="请输入您的密码" :type="type">
        <i  class="iconfont icon-zhucedenglu-chakanmima-zhengyan" slot="icon"></i>
      </liu-input>
      <!--绑定相应数据 data有定义-->

      <liu-input v-model="formData.code" placeholder="请输入验证码" :max="6" type="tel">
        <i class="iconfont icon-yanzhengma" slot="icon"></i>

        <!--solt='right' 插槽在右边  @click后面要加引号-->
        <Button slot="right" size="small" @click="sendCode">
          {{btnText}}
        </Button>
      </liu-input>
    </div>
    <div class="router-wrap">
      <!--<router-link :to="{name:'/login'}">已有账号？立即登录</router-link>-->
      <!--这时候不需要'/'-->
      <router-link :to="{name:'login'}">已有账号？立即登录</router-link>
    </div>
    <Button type="primary" size="large" style="margin-top: 36px" @click="handleRegister">立即注册</Button>
  </div>
</template>


<script>
  import liuInput from '@/components/liu-input'
  import {Button, Toast} from 'mint-ui'
  import validator from 'validator'

  export default {
    name: "register",
    components:{
      // 注册类名
      liuInput,
      Button
    },
    data(){
      return{
        formData:{
          phone:'',
          password:'',
          code:'',
        },
        // 二级声明
        type: 'password',
        btnText:'获取验证码',
        // 默认初始不发送验证码
        isSendCode:false,
      }
    },
    methods:{
      toggleType(){
        this.type = this.type == 'password'? 'text':'password'
      },
      sendCode (){
        //验证是否中国区电话号
        if (validator.isMobilePhone(this.formData.phone,'zh-CN')){
          this.isSendCode = true;
          let seconds = 60;
          // 多了一个 's' let secondes = 60;
          let timer = setInterval(()=>{
            seconds--;
            //  又多一个's' secondes--;
            // this.num--;
            // this.btnText = `再次获取(${this.num})s`

            // 此处是反引号
            this.btnText = `再次获取(${seconds})s`;
            if (seconds == 0){
              // 右多一个's' if (secondes == 0){
              clearInterval(timer)
              this.btnText = '获取验证码'
            }
          },1000);
          //ajax获取 不算完 还要进行跨域 去config
          this.$axios.post(this.$api.sendCode,{
            phone:this.formData.phone
          }).then(res =>{
            console.log(res);
            Toast({
              message:res.msg,
              duration:500
            })
          })
        }else {
          Toast({
            message:'不是合法手机号',
            duration:500
          })
        }
      },
      handleRegister(){
        let phoneStatus = validator.isMobilePhone(this.formData.phone,'zh-CN')
        let passwordStatus = validator.isLength(this.formData.password,{min:6})
        if (phoneStatus&&passwordStatus&&this.isSendCode){
          this.$axios.post(this.$api.register,this.formData).then(res =>{
            if (res.code == 200){
              Toast({
                message:res.msg,
                duration:1000
              })
              setTimeout(()=>{
                this.$router.push('/login')
              },1000)
            }else {
              Toast({
                message:res.msg,
                duration:1000
              })
            }
          })
        }else {
          Toast({
            message:'请输入正确的手机号码正确，并获取6位验证码，且密码多余6位',
            duration:1500
          })
        }
      }
    },
  }
</script>
<!--要加'./'-->
<!--<style scoped lang="scss" src="index.scss"></style>-->
<!--还能引用类似页面的样式-->
<style scoped lang="scss" src="../login/index.scss"></style>

