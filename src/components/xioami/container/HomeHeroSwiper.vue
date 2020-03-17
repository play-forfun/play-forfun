<template>
  <div class="home-hero-swiper">
    <el-carousel trigger="click" height="460px" arrow="always" interval="10000000">
      <el-carousel-item v-for="item in swiperImgs" :key="item">
        <img :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="site-category">
      <el-link :underline="false" href="">手机 电话卡</el-link>
      <el-link :underline="false" href="">电视 盒子</el-link>
      <el-link :underline="false" href="">笔记本 显示器 平板</el-link>
      <el-link :underline="false" href="">家电 插线板</el-link>
      <el-link :underline="false" href="">出行 穿戴</el-link>
      <el-link :underline="false" href="">智能 路由器</el-link>
      <el-link :underline="false" href="">电源 配件</el-link>
      <el-link :underline="false" href="">健康 儿童</el-link>
      <el-link :underline="false" href="">耳机 音箱</el-link>
      <el-link :underline="false" href="">生活 箱包</el-link>
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

<style scoped>
  .home-hero-swiper {
    height: 460px;
    position: relative;
  }

  .el-carousel__item img {
    height: 460px;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  /*直接在网页中F12找到对应的类，在这里重写即可，设置宽高一致，圆角50%则显示为圆形*/
  /deep/ .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: .8;
    border: 1px solid #888888;
    background-color: #393939;
  }

  /deep/ .el-carousel__indicators {
    left: 92%;
  }

  /deep/ .site-category {
    width: 230px;
    height: 460px;
    background-color: #fff;
    opacity: 0.5;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;

  }

  /deep/ .site-category, .el-link {
    list-style-type: none;
    font-size: 14px;
    text-align: left;
    text-indent: 30px;
    display:block ;
    height: 46px;
    background-color: #fff;
    line-height: 46px;
    color: red;
    /*margin-left: 10px;*/
    /*align-content: space-between;*/
  }
  /deep/ .site-category, a:hover{
    background-color: #ff6700;
    color: green;
    /*display: block;*/
    /*opacity: 1;*/
  }
  /deep/ .el-carousel__arrow {
    height: 63px;
    width: 33px;
    border-radius: 0;
  }

  /deep/ .el-carousel__arrow--right {
    right: 0px;
  }

  /deep/ .el-carousel__arrow--left {
    left: 230px;
  }
</style>