<template>
  <div>
    <h1>发现</h1>
    <p>这是发现的内容，哈哈哈</p>
    <el-button type="primary" @click="myClick">引入了ELEMENT-UI点击</el-button>
  </div>
</template>

<script>
  export default {
    name: "Find",
    mounted() {

    },
    methods:{
      myClick(){
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
