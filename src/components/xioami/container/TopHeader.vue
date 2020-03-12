<template>
  <div id="top-header">
    <div class="top-header-logo">
      <img src="../../../assets/img/mi-logo.png" alt="">
      <img src="../../../assets/img/mi-home.png" alt="">
    </div>
    <div class="top-header-nav">
      <div style="width: 130px;height: 80px;float: left"></div>
      <div class="top-header-item">
        <el-link :underline="false" href="">小米手机</el-link>
        <el-link :underline="false" href="">Redmi 红米</el-link>
        <el-link :underline="false" href="">电视</el-link>
        <el-link :underline="false" href="">笔记本</el-link>
        <el-link :underline="false" href="">家电</el-link>
        <el-link :underline="false" href="">路由器</el-link>
        <el-link :underline="false" href="">智能硬件</el-link>
        <el-link :underline="false" href="">服务</el-link>
        <el-link :underline="false" href="">社区</el-link>
      </div>
    </div>
    <div class="top-header-search">
<!--      <input type="search" class="search-text">
      <input type="submit" class="iconfont"></input>-->
      <el-input type="text" suffix-icon="el-icon-search" placeholder="小米9 Pro 5G RedmiNote8">
      </el-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopHeader",
    data(){
      return {
        message:'小米9 Pro 5G RedmiNote8'
      }
    }
  }
</script>

<style scoped>
  #top-header {
    height: 90px;
    width: 94%;
    margin: 0 auto;
    background-color: #ffffff;
  }

  .top-header-logo {
    background-color: #ff6700;
    width: 50px;
    height: 50px;
    float: left;
    margin: 20px 0;
  }

  .top-header-nav {
    float: left;
    width: 900px;
    line-height:90px;
  }
  .top-header-item{
    float: left;
    margin-left: 35px;
  }
  .top-header-item a:hover{
    color: #ff6700;
  }
  .top-header-item a{
    float: left;
    padding: 0 11px;
    font-size: 1em;
  }
  .top-header-search {
       float: right;
       line-height: 80px;
     }
  .top-header-search .search-text{
    width: 200px;
    height: 50px;
    line-height: 50px;
  }
  .top-header-search .iconfont{
    font-size: 40px;
    /*padding-top: 50px;*/
  }
  .el-input .el-input_inner{
    background-color: #ff6700;
  }
</style>