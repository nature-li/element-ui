<template>
  <div>
    <el-row>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>
    <el-row>
      <el-button plain disabled>朴素按钮</el-button>
      <el-button type="primary" plain disabled>主要按钮</el-button>
      <el-button type="success" plain disabled>成功按钮</el-button>
      <el-button type="info" plain disabled>信息按钮</el-button>
      <el-button type="warning" plain disabled>警告按钮</el-button>
      <el-button type="danger" plain disabled>危险按钮</el-button>
    </el-row>
    <el-row>
      <el-button round disabled>圆角按钮</el-button>
      <el-button type="primary" round disabled>主要按钮</el-button>
      <el-button type="success" round disabled>成功按钮</el-button>
      <el-button type="info" round disabled>信息按钮</el-button>
      <el-button type="warning" round disabled>警告按钮</el-button>
      <el-button type="danger" round disabled>危险按钮</el-button>
    </el-row>
    <el-row>
      <el-button icon="el-icon-search" circle disabled></el-button>
      <el-button type="primary" icon="el-icon-edit" circle disabled></el-button>
      <el-button type="success" icon="el-icon-check" circle disabled></el-button>
      <el-button type="info" icon="el-icon-message" circle disabled></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle disabled></el-button>
      <el-button type="danger" icon="el-icon-delete" circle disabled></el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Button2'
}
</script>

<style scoped>

</style>
