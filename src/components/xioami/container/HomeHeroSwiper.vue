<template>
  <div class="home-hero-swiper">
    <div class="block">
      <el-carousel trigger="click" height="460px" arrow="hover" indicator-position="right" interval="10000000">
        <el-carousel-item v-for="item in swiperImgs" :key="item">
          <img :src="item.url" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeHeroSwiper",
    data() {
      return {
        swiperImgs: [
          {
            url: require('../../../assets/img/swiper/RedimK30.jpg')
          },
          {
            url: require('../../../assets/img/swiper/小米手表color.jpg')
          },
          {
            url: require('../../../assets/img/swiper/智能门铃2.jpg')
          },
          {
            url: require('../../../assets/img/swiper/腾讯黑鲨游戏手机.jpg')
          },
          {
            url: require('../../../assets/img/swiper/Redim Note8.jpg')
          }
        ],
      }
    }
  }
</script>

<style>
  .home-hero-swiper {
    height: 460px;
  }

  .el-carousel__item img {
    height: 460px;
    margin: 0;
    padding: 0;
  }
  /*.el-calendar .el-carousel__indicator */
  .el-carousel__button{
    width: 10px;
    height: 10px;
    border-radius:50%;
  }
  .el-carousel__indicators{
/*    display: flex;
    justify-content: right;*/
    display: block;
    float: right;
  }
</style>