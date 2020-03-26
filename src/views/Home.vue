<!-- home -->
<template>
  <div>
    <div class="title">
      <el-badge  :value="listData.length" :max="max">
        <i @click="handleBuy" class="el-icon-truck"></i>
      </el-badge>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="数码" name="first">
        <digital :data="list" type="digital" />
      </el-tab-pane>
      <el-tab-pane label="家电" name="second">
        <digital :data="bul" type="house" />
      </el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
//   mapMutations
} from "vuex";
import digital from '../components/shopping/digital'
export default {
  data() {
    return {
      max: 99,
      activeName: "first"
    };
  },
  components: {
    digital
  },
  computed: {
    ...mapState('digital', ['list']),
    ...mapState('house', ['bul']),
    ...mapGetters(['listData']),
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleBuy() {
      console.log(this.listData)
      this.$router.push('/shopping/buy')
    }
  }
};
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
.title {
  text-align: right;
  font-size: 20px;
  line-height: 42px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  & > i {
    cursor: pointer;
  }
}
</style>