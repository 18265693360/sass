<template>
  <div class="read-progress-wrap">
    <div class="child" :style="{width}"></div>
  </div>
</template>

<script>
  export default {
    name: "read-progress",
    props:{
      total:Number,
      value:Number,
    },
    data(){
      return{
        isShowChild:false,
        width:0
      }
    },
    methods:{
      handleTransition(){
        this.width = this.value / this.total * 100 + '%';
      }
    },
    created() {
      setTimeout(() =>{
       this.handleTransition()
      },300)
      // 300是因为刚好dom渲染完成
    },
    watch:{
      total(){
        this.handleTransition()
      },
      value(){
        this.handleTransition()
      }
    }
  }
</script>

<style lang="scss">
  .read-progress-wrap{
    position: relative;
    background: #ebebeb;
    height: 6px;
    padding: 0;

    .child{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0;
      background: #409eff;

      transition:width .8s ease;
      /*动画效果*/
    }
  }
</style>
