<template>
  <div>
    <h1>发现</h1>
    <p>这是发现的内容，哈哈哈</p>
    <el-button type="primary" @click="myClick">引入了ELEMENT-UI点击</el-button>
    <div>
      <h1><el-tag type="success">{{msg}}</el-tag></h1>
      <router-link to="/find/news">新闻</router-link>
      |
      <router-link to="/find/message">消息</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Find",
    mounted() {

    },
    data(){
      return{
        msg:'路由的嵌套'
      }
    },
    methods: {
      myClick() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      }
    }
  }
</script>

<style scoped>
</style>
