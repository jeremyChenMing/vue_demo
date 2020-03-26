<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1>案例</h1>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <router-link active-class="active" v-for="item in navs" :exact="item.exact" :to="item.link" :key="item.id">{{item.name}}</router-link>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {name: '首页', link: '/', exact: true, id: 1},
        {name: '购物车', link: '/shopping', exact: false, id: 2},
        {name: '其他', link: '/about', exact: false, id: 3},
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {}
};
</script>

<style lang="less">
@import './less/Index.less';

.el-container{
  height: 100%;
}
.el-header{
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, .1);
  display: flex;
  align-items: center;
}
.el-aside{
  border-right: 1px solid rgba(0, 0, 0, .1);
  display: flex;
  flex-direction: column;
  & > a{
    line-height: 42px;
    padding: 0 10px;
    color: #000;
  }
  .active{
    background-color: rgba(41, 132, 235, .5);
    color: #ffffff;
  }
}
</style>
