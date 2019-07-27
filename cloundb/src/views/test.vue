<template>
    <div>
      <zj-upload>
        <!--主页面用了slot可以插入东西-->
        <!--此处用div 因为label button都有默认行为 在一起嵌套会失去效用<button>上传文件</button>-->
        <div>上传文件</div>
      </zj-upload>
    </div>
</template>

<script>
  import zjUpload from '@/components/zj-upload'


  export default {
    name: "test",
    components:{
      zjUpload
    }
  }
</script>

<style scoped>

</style>
