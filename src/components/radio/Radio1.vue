<template>
  <div>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" lable="2">备选项</el-radio>
  </div>
</template>

<script>
export default {
  name: 'Radio1',
  data () {
    return {
      radio: '1'
    }
  }
}
</script>

<style scoped>

</style>
