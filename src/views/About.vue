<!-- about -->
<template>
  <div>
    <h1>位置：{{about.name}}</h1>
    <ul>
      <li v-for="item in about.list" :key="item.age">
        {{item.name}}-{{item.age}}
      </li>
    </ul>
    <el-button @click="handle">添加-</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['about'])
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    handle() {
      this.$store.commit('add', {name: '种田', age: 1})
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
