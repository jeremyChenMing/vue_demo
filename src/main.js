import Vue from 'vue'
import echarts from 'echarts'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
import Http from './services/req'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(less);

Vue.prototype.$echarts = echarts
Vue.prototype.$Http = Http
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
