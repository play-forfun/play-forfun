<template>
  <el-container>
    <el-header class="topbar">
      <div class="top-container">
        <div class="topbar-nav">
          <el-link href="">小米商城 | </el-link>
          <el-link href="">MIUI | </el-link>
          <el-link href="">IoT | </el-link>
          <el-link href="">云服务 | </el-link>
          <el-link href="">金融 | </el-link>
          <el-link href="">有品 | </el-link>
          <el-link href="">小爱开放平台 | </el-link>
          <el-link href="">企业团购 | </el-link>
          <el-link href="">资质证照 | </el-link>
          <el-link href="">协议规则 | </el-link>
          <el-link href="">下载app | </el-link>
          <el-link href="">Select Location</el-link>
        </div>
        <div class="topbar-info">
          <el-link href="">登录|</el-link>
          <el-link href="">注册|</el-link>
          <el-link href="">消息通知</el-link>
        </div>
        <div class="topbar-cart">
          <el-link icon="el-icon-shopping-cart-1">购物车</el-link>
        </div>
      </div>
    </el-header>
    <el-main class="header">Main</el-main>
    <el-main class="home-hero-swiper">Main</el-main>
    <el-main class="home-hero-sub">Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
  export default {
    name: "ContainerXM"
  }
</script>

<style scoped>
  .el-header, .el-footer {
    color: #8de0ff;
    text-align: center;
    line-height: 60px;
  }

  .el-header {
    background-color: #333333;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    width: 94%;
    color: #333;
    text-align: center;
    line-height: 160px;
    margin: 0 auto;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .top-container{
    display: flex;
  }
  .top-container a{
    color: #b0b0b0;
  }
  .topbar-nav{

  }
  .topbar-cart{
  }
  .topbar-info{

  }
</style>