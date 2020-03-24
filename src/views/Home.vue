<!-- home -->
<template>
  <div>
    home
    {{count}}
    getters
    <p>{{numb}}</p>
    <el-button @click="hanlde">增加</el-button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['numb']),
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // console.log(this.$store.getters.numb)
  },
  methods: {
    hanlde: function() {
      // this.$store.commit('increment', 5)

      // this.$store.commit({
      //   type: 'increment',
      //   amount: 5
      // })
      this.$store.dispatch('inAsync')
    },
    ...mapMutations({
      add: 'increment'
    }),
  }
};
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
</style>