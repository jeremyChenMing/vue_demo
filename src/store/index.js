import Vue from 'vue'
import Vuex from 'vuex'
import about from './about'
import home from './home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 10,
  },
  mutations: {
    change(state) {
      console.log('111')
      state.total = 1
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {
    about: about,
    home: home,
  }
})
