<template>
  <el-container>
    <el-container>
      <el-header>
        <a href="">首页</a> <span>|</span>
        <a href="">新闻资讯</a> <span>|</span>
        <a href="">产品服务</a> <span>|</span>
        <a href="">产品试用</a> <span>|</span>
        <a href="">合作伙伴</a><span>|</span>
        <a href="">关于我们</a><span>|</span>
        <a href="">招贤纳士</a><span>|</span>
        <a href="">OA入口</a>
      </el-header>
      <el-main>
        <template>
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </template>
      </el-main>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "Container"
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 5px;
    margin: 10px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    margin: 5px;
    padding: 10px;
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>