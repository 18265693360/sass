<template>

  <!--<div>-->
    <!--{{currentText}}-->
  <!--</div> -->
  <span>
    {{currentText}}
  </span>

</template>

<script>
  export default {
    name: "index",
    props:{
      value:{
        type:[String, Number],
        default:''
      }
    },
    data(){
      return{
        currentText:'',
        //现在的时间 就是date currentData: new Date(),
        currentDate: new Date(),
        oldDate:null,
      }
    },
    methods:{
      // 计算时间节点
      handleComputed(){

        // 拿到上面的oldData  一定注意这里都是date
        // 少一个letter  this.oldDate = new Date(this.valu)
        this.oldDate = new Date(this.value)
        const oldTime = this.oldDate.getTime()//获取服务器给我们的时间戳
        const currentTime = this.currentDate.getTime()//获取本地的unix时间戳
        const reduceTime = currentTime - oldTime //unix时间戳
        const date = new Date()
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        // const zeroTime = data.getTime();
        const zeroTime = date.getTime();
        const  oldDay = this.oldDate.getDate()


        //四舍五入 Math.round()

        //zeroTime 20190308 00:00:00 每天更新

        if (reduceTime/(1000*60*60)<1){ //小于一个小时 显示多少时间之前
          this.currentText = `${Math.round (reduceTime / (1000*60))}分钟前`
        } else if (reduceTime/(1000*60*60)>=1 && (zeroTime - oldTime) < 0){
          //小于一天前  显示（多少小时前）
          this.currentText = `${Math.round(reduceTime/(1000*60*60))}小时前`
        }else if ((zeroTime - oldTime) >=0 && reduceTime / (1000*60*60*24*31) < 1){ //小于一个月前 显示（多少天之前）
          this.currentText = `${Math.round(reduceTime/ (1000*60*60*24))}天前`
        }else {
          this.currentText = `${Math.round(reduceTime/ (1000*60*60*24*31))}月前`
        }
        // 时间逻辑
        // 小于一小时前  显示多少分钟前
        // 小于一天前    显示多少小时前
        // 小于一个月前  显示多少天前
        // 显示多少个月
      }
    },
   watch:{
      value:{
        immediate:true,
        handler(val) {
          if (val){
            this.handleComputed()
          }
        }
      }
   }
  }
</script>

<style scoped>

</style>
