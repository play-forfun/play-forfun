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
      <input v-model="message" >
      <el-button type="primary" icon="el-icon-search"></el-button>
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
    width: 650px;
    line-height:90px;
  }
  .top-header-item a:hover{
    color: #ff6700;
  }
  .top-header-item a{
    float: left;
    padding: 0 11px;
    font-size: 0.7em;
  }
  .top-header-search {
    float: right;
    line-height: 80px;
  }
  el-button{
    width: 20px;
    height: 30px;
  }
</style>