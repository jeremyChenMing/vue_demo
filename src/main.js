import Vue from 'vue'
import echarts from 'echarts'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(less);

Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
