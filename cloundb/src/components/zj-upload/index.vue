<template>
  <label class="zj-upload-wrap">
    <!--label加样式实现各种表单-->
    <!--input加file是前端获取文件的唯一途径-->
    <input type="file" class="zj-upload-input" @change="change">
    <!--<div class="upload-btn">上传按钮</div> 可以用slot替代-->
    <slot></slot>
  </label>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "index",
    data(){
      return{
        token:''
      }
    },
    // 拿到token
    methods:{
      getToken(){
        // axios.get('http://upload 不是 uplosd.yaojunrong.com/getToken').then(res =>{
        axios.get('http://upload.yaojunrong.com/getToken').then(res =>{
          this.token = res.data.data
        })

      },
      change($event){
        const file = $event.target.files[0];
        const form = new FormData();
        form.append('file',file);
        form.append('token',this.token)
        // axios.post('http(s) 括号是说 http或者https 二选一 ://upload-z1.qiniup.com')
        axios.post('https://upload-z1.qiniup.com',form).then(res =>{
          console.log(res);
          // 抛出组件
          this.$emit('success',res.data.url)
        })
      }
    },
    created() {
      this.getToken()
    }
  }
</script>


<!--<style scoped>-->
<!--封装组件不要用scoped 别人无法覆盖你的样式-->
<style lang="scss">
  .zj-upload-wrap{
    display: block;

    .zj-upload-input{
      /*无法清除input的默认样式 那就不让他显示*/
      display: none;
    }

    .upload-btn{
      width: 100px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: #555;
      border: 1px solid #000;
    }
  }

</style>
