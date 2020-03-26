<!-- 购买页面 -->
<template>
  <div>
      <h1>您购买了如下商品：</h1>
      <ul class="list">
        <li v-for="item in listData" :key="item.id">
          {{item.name}} {{item.cash}}$
        </li>
        <li>共计：{{listData.length}}件商品，{{money}}美元</li>
        <li class="last">
          <el-button type="primary" :loading="loading" @click="handleBuy" :disabled="dis">购买</el-button>
        </li>
      </ul>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapGetters(['listData']),
    money() {
      let temp = 0;
      this.listData.forEach(item => {
        temp += item.cash
      })
      return temp
    },
    dis() {
      return this.listData.length === 0 ? true : false
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    console.log(this.listData)
  },
  methods: {
    handleBuy() {

      this.loading = true;
      this.$store.dispatch('buy').then(data => {
        this.loading = false;
        this.$notify({
          title: '标题名称',
          message: data,
          type: 'success'
        });
      })
    }
  }
};
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
.list{
  padding: 20px 0;
  & > li{
    line-height: 42px;
  }
  .last{
    text-align: right;
  }
}
</style>