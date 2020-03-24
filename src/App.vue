<template>
  <div id="app">
    
    <router-link to="/">home</router-link> &nbsp;&nbsp;
    <router-link to="/about">about</router-link>
    <div>总数： {{count}}</div>
    <p>total: {{this.$store.state.total}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return{}
  },
  computed: {
    count() {
      return this.$store.state.home.list.length + this.$store.state.about.list.length

      // return 0;
    }
  },
  created() {
    
  },
  mounted() {

  }
}
</script>

<style>

</style>
