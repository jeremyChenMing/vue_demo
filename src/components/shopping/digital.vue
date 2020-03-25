<!-- 数码 -->
<template>
  <div>
      <div>
          <el-checkbox-group v-model="choice" @change="hanleChoice">
              <el-checkbox v-for="item in data" :label="item.value" :key="item.value">
                  {{item.name}} {{item.cash}}$
              </el-checkbox>
          </el-checkbox-group>
      </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'type'],
  data() {
    return {
        choice: []
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
      console.log()
      
  },
  methods: {
      hanleChoice(val) {
          this.$store.commit(`${this.type}/saveVal`, val)
      }
  }
};
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
.el-checkbox-group{
    display: flex;
    flex-direction: column;
    .el-checkbox{
        margin-bottom: 20px;
    }
}
</style>