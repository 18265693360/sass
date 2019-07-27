<template>
  <div class="liu-input-wrap">
    <!--不确定那个图标-->
    <slot name="icon">
      <i class="iconfont icon-user-copy"></i>
    </slot>

    <!--<slot name="icon"></slot>-->
    <!--这两个标签就是互相包含的关系 不然会出现两个iconfont-->
    <!--<i class="iconfont icon-user-copy"></i>-->
    <label>
      <!--v-model实现双向数据绑定-->
      <input type="text" v-model="currentValue" v-if="type == 'text'" :placeholder="placeholder">
      <input type="password" :placeholder="placeholder" v-model="currentValue" v-else>
    </label>
    <slot name="right"></slot>
  </div>
</template>




<script>
  export default {
    name: "index",
    // 父子传值
    props:{
      value:[String,Number],
      type:{
        default:'text'
      },
      placeholder:String,
      max:Number
    },
    data(){
      return{
        currentValue:this.value
      }
    },
    watch:{
      currentValue(newValue,oldValue){
        if (this.max){
          if (newValue.length>this.max){
            this.currentValue = oldValue
          }
        }
        this.$emit('input',newValue)
      },
      value:{
        immediate:true,
        handler(val){
          this.currentValue = val;
        }
      }
    },
  }
</script>

<style scoped lang="scss" src="./index.scss"></style>
