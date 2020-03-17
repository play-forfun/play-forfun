<template>
  <div class="top-container">
    <div class="top-container-nav">
      <el-link :underline="false" href="">小米商城 <span class="sep">|</span></el-link>
      <el-link :underline="false" href="">MIUI <span class="sep">|</span></el-link>
      <el-link :underline="false" href="">IoT <span class="sep">|</span></el-link>
      <el-link :underline="false" href="">云服务 <span class="sep">|</span></el-link>
      <el-link :underline="false" href="">金融 <span class="sep">|</span></el-link>
      <el-link :underline="false" href="">有品 <span class="sep">|</span></el-link>
      <el-link :underline="false" href="">小爱开放平台 <span class="sep">|</span></el-link>
      <el-link :underline="false" href="">企业团购 <span class="sep">|</span></el-link>
      <el-link :underline="false" href="">资质证照 <span class="sep">|</span></el-link>
      <el-link :underline="false" href="">协议规则 <span class="sep">|</span></el-link>
      <el-link :underline="false" href="">下载app <span class="sep">|</span></el-link>
      <el-link :underline="false" href="">Select Location</el-link>
    </div>
    <div class="top-container-cart">
      <el-link :underline="false" icon="el-icon-shopping-cart-1">购物车（0）</el-link>
    </div>
    <div class="top-container-info">
      <el-link :underline="false" href="">登录<span class="sep">|</span></el-link>
      <el-link :underline="false" href="">注册<span class="sep">|</span></el-link>
      <el-link :underline="false" href="">消息通知</el-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopContainer"
  }
</script>

<style scoped>
  .top-container {
    width: 94%;
    margin: auto;
    line-height: 40px;
  }

  .top-container a {
    color: #b0b0b0;
    font-size: 12px;
  }

  .top-container .sep {
    margin: 0.3em;
    color: #424242;
  }

  .top-container-nav {
    float: left;
  }
  .top-container-info a{
    float: left;
    /*margin: 0 10px 0 200px;*/
    padding: 0 5px;
  }
  .top-container-info{
    float: right;
    margin-right: 18px;
  }
  .top-container-cart{
    float: right;
  }

  .top-container a:hover {
    color: #ffffff;
  }

  .top-container-cart a:hover {
    background-color: #ffffff;
    color: #ff6700;
  }

</style>