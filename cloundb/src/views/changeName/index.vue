<template>
  <!--无法看到这里的文字 因为组件Header 中的 fixed不占空间 导致文本上浮-->
  <!--<div>-->
    <!--<h1>嗨</h1>-->
  <!--</div>-->


  <div class="container change-name">
    <input-change :value="userMsg.username || userMsg.phone" @change="handleChange"></input-change>
    <div class="desc">
      好听的昵称能让他人更容易记住您
    </div>
    <div class="btn-wrap">
      <Button size="large" type="primary" @click="handleSave">保存更改</Button>
    </div>
  </div>



</template>

<script>
  import inputChange from '@/components/input-change'
  import {Button, Toast} from 'mint-ui'
  import {mapState, mapActions} from 'vuex'


  export default {
    name: "index",
    components:{
      inputChange,
      Button,
    },
    data(){
      return{
        username:''
      }
    },
    computed:{
      userMsg(){
        return this.$store.state.userMsg.user
      }
    },
    methods:{
      ...mapActions(['getUserMsg']),
      handleChange(val){
        this.username = val
      },
      handleSave(){
        this.$axios.put(this.$api.changeUser,{
          username:this.username
        }).then(res =>{
          if (res.code == 200){
            Toast({
              message:'昵称修改成功',
              duration:1000
            })
            this.getUserMsg()
            setTimeout(()=>{
              this.$router.push('/changemsg')
            },1000)
          } else{
            Toast({
              message:res.msg
            })
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss" src="./index.scss"></style>

