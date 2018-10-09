<template>
  <div>
    <el-radio-group v-model="radio2">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: 'Radio3',
  data () {
    return {
      radio2: 9
    }
  }
}
</script>

<style scoped>

</style>
