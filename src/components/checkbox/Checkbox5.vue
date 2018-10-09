<template>
  <div>
    <el-checkbox-group v-model="checkedCities" :min="1" :max="3">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']

export default {
  name: 'Checkbox5',
  data () {
    return {
      checkedCities: ['上海', '北京'],
      cities: cityOptions
    }
  }
}
</script>

<style scoped>

</style>
