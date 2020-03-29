<!-- about -->
<template>
  <div>about</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  computed: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    function getHome() {
      return axios.get("/api/v1/basic/home-page");
    }
    function getPolicy() {
      return axios.get("/api/v1/basic/information-list");
    }
    axios.all([getHome(), getPolicy()]).then(
      axios.spread(function(acct, perms) {
        // Both requests are now complete
        console.log(acct, perms);
      })
    );
  },
  methods: {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
