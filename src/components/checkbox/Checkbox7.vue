<template>
  <div>
    <div>
      <el-checkbox v-model="checked3" label="备选项1" border></el-checkbox>
      <el-checkbox v-model="checked4" label="备选项2" border></el-checkbox>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox v-model="checked5" label="备选项1" border size="medium"></el-checkbox>
      <el-checkbox v-model="checked6" label="备选项1" border size="medium"></el-checkbox>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox v-model="checked5" label="备选项1" border size="small"></el-checkbox>
      <el-checkbox v-model="checked6" label="备选项1" border size="small"></el-checkbox>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup5" size="small">
        <el-checkbox label="备选项1" border></el-checkbox>
        <el-checkbox label="备选项2" border></el-checkbox>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup6" size="mini">
        <el-checkbox label="备选项1" border></el-checkbox>
        <el-checkbox label="备选项2" border></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox6',
  data () {
    return {
      checked3: true,
      checked4: false,
      checked5: false,
      checked6: true,
      checkboxGroup5: [],
      checkboxGroup6: ['备选项2']
    }
  }
}
</script>

<style scoped>

</style>
