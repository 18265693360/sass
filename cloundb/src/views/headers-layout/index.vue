<template>

  <!--<div>-->
    <!--<Header fixed :title="$route.meta.title">-->
      <!--<Button icon="back" slot="left" @click="$router.back()">返回</Button>-->
    <!--</Header>-->
    <!--<router-view></router-view>-->
  <!--</div>-->
  <div>
    <Header fixed :title="$route.meta.title">
      <Button icon="back" slot="left" @click="$router.back()">返回</Button>
    </Header>
    <router-view></router-view>
  </div>

</template>

<script>
  import {Button, Header} from 'mint-ui'

  export default {
    name: "headers-layout",
    components:{
      Button,
      Header,
    }
  }
</script>

<style scoped>

</style>
