<template>
  <el-container>
    <el-header height="30px">
      <top-container/>
    </el-header>
    <el-main class="header">Main</el-main>
    <el-main class="home-hero-swiper">Main</el-main>
    <el-main class="home-hero-sub">Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
  import TopContainer from "./TopContainer";
  export default {
    name: "ContainerXM",
    components:{
      TopContainer
    }

  }
</script>

<style scoped>
  .el-header, .el-footer {
    color: #8de0ff;
    text-align: center;
    line-height: 30px;
  }

  .el-header {
    background-color: #333333;
    height: 10px;
    padding: 0;
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
</style>