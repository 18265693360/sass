<template>
    <div>
      <swiper :options="swiperOption" ref="mySwiper">

      <!--@someSwiperEvent="callback 删除 不需要监听-->
        <!--swiperOptin绑定值 下面要定义-->
        <!-- slides -->

        <swiper-slide v-for="(item,index) in swiperData" :key="index">
          <!-- 有v-for 绑定key值-->

          <router-link :to="{name:'details',params:{id: item.book._id}}"                                       class="swiper-img-wrap">
            <!--//样式-->
            <!--//：绑定语法 不然会被当做字符串 class样式-->

            <img :src="item.img" :alt="item.img" class="swiper-img">
            <div class="title">
              <!--轮播图上的文字-->
              {{item.title}}
            </div>
          </router-link>
        </swiper-slide>

        <!-- Optional controls -->

        <!--pagination分页器-->
        <!--上一按钮-->
        <!--下一按钮-->
        <!--滚动条-->

        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'


  export default {
    name:'index',
    data(){
      return{
        swiperOption:{
          pagination: {
            el: '.swiper-pagination',
          },
        },
        //获取数据 是数组
        swiperData:[]
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    methods:{
      getSwiper(){
        // 为了避免后端改代码 多写积几分 能耦合耦合 能模块就模块
        this.$axios.get(this.$api.getSwiper).then(res=>{
          this.swiperData = res.data;
        })
      }
    },
    //调用 第一次查看数据结构的地方
    created() {
      this.getSwiper()
    }
  }
</script>

<style scoped lang="scss">
    @import "../../globalCss/px2-rem";
    .swiper-img-wrap{
      /*seiper-img-wrap等价于a标签*/
      display: block;
      width: 100%;
      /*消除下划线*/
      text-decoration: none;
      position: relative;
      color: rgba(255,255,255,.9);

      .swiper-img{
        height: px-to-rem(400);
      }

      .title{
        /*盖在轮播图上*/
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 4px;
        height: 20px;
        background: rgba(0,0,0,.5);
      }
    }
    /*加高度*/

</style>
