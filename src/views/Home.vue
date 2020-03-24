<!-- home -->
<template>
  <div>
    <h1>位置：{{home.name}}</h1>
    <ul>
      <li v-for="item in home.list" :key="item.age">
        {{item.name}}-{{item.age}}
      </li>
    </ul>
    <p>{{calcs}}</p>
    <el-button @click="hanlde">增加</el-button>
  </div>
</template>

<script>
import { 
  mapState, 
  mapGetters, 
  // mapMutations 
} from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["home"]),
    ...mapGetters("home",["calcs"])
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    console.log(this.$store.state.total)
    // console.log(this.about.name);
  },
  methods: {
    hanlde: function() {
      // this.$store.commit('home/add', {name: 'add', age: 1})
      this.$store.dispatch('home/inAsync')
      // this.$store.commit('change')
    }
  }
};
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
</style>