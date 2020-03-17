<template>
  <el-container>
    <el-header height="40px">
      <top-container/>
    </el-header>
    <top-header/>
    <el-main>
      <home-hero-swiper/>
    </el-main>
    <el-main>
      <home-hero-sub/>
    </el-main>
  </el-container>
</template>

<script>
  import TopContainer from "./container/TopContainer";
  import TopHeader from "./container/TopHeader";
  import HomeHeroSwiper from "./container/HomeHeroSwiper";
  import HomeHeroSub from "./container/HomeHeroSub";

  export default {
    name: "ContainerXM",
    components: {
      TopContainer,
      TopHeader,
      HomeHeroSwiper,
      HomeHeroSub
    }

  }
</script>

<style scoped>
  .el-header {
    color: #8de0ff;
    text-align: center;
    line-height: 30px;
    background-color: #333333;
    height: 10px;
    padding: 0;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    width: 94%;
    /*color: #333;*/
    /*text-align: center;*/
    /*!*line-height: 160px;*!*/
    margin: 0 auto;
    padding: 0;
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
</style>