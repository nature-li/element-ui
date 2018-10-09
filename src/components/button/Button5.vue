<template>
  <div>
    <el-button type="primary" icon="el-icon-loading">加载中</el-button>
    <el-button type="primary" :loading="true">加载中</el-button>
    <el-button type="primary" :loading="false">加载中</el-button>
  </div>
</template>

<script>
export default {
  name: 'Button5'
}
</script>

<style scoped>

</style>
