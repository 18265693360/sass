<!--需要引入相应的页面才能出现效果-->
<template>
    <div class="input-change">
      <!--组件中有可能是被header盖住了-->
      <input type="text" :value="value" :placeholder="placeholder" class="input" @change="handleChange" v-if="type=='text'">
      <input type="password" :value="value" :placeholder="placeholder" class="input"
      @change="handleChange" v-if="type=='password'">
    </div>
</template>

<script>
  export default {
    name: "index",
    props:{
      value:String,
      placeholder:String,
      title:String,
      type:{
        type:String,
        default:'text'
      }
    },
    methods:{
      handleChange($event){
        console.log($event.target.value)
        this.$emit('input',$event.target.value)
        this.$emit('change',$event.target.value)
      }

    }
  }
</script>

<style lang="scss" src="./index.scss"></style>
