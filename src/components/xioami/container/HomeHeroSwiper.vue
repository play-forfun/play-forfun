<template>
  <div class="home-hero-swiper">
    <div class="block">
      <el-carousel trigger="click" height="460px" arrow="always" interval="10000000">
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
  /*直接在网页中F12找到对应的类，在这里重写即可，设置宽高一致，圆角50%则显示为圆形*/
  .el-carousel__button{
    width: 10px;
    height: 10px;
    border-radius:50%;
    opacity:.8;
    border:1px solid #888888;
    background-color: #393939;
  }
  .el-carousel__indicators {
    /*    display: flex;
        justify-content: flex-end;
        display: block;
        float: right;*/
  }
</style>