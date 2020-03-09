<template>
  <div id="box">
    <div class="item item1">item1</div>
    <div class="item item2">item2</div>
    <div class="item item3">item3</div>
  </div>
</template>

<script>
  export default {
    name: "FlexTest"
  }
</script>

<style scoped>
#box{
  background-color:#ff5f3e;
  height: 300px;
  width: 200px;
  /*div在页面中居中*/
  margin: 0 auto;
  /*文字居中*/
  text-align: center;
  line-height:100px;
  /*文字颜色*/
  color: #ffffff;
  /*flex布局*/
  display: flex;
  justify-content: center;
  flex-wrap:nowrap;
}
  .item{
    width: 100px;
    height: 100px;
  }
  .item1{
    background-color: #00f;
  }
.item2{
  background-color: #0f0;
}
.item3{
  background-color: #f00;
}
</style>