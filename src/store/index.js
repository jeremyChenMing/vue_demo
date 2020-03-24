import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state, v) {
      console.log(v)
      state.count += v
    }
  },
  actions: {
    inAsync(context) {
      setTimeout(function() {
        context.commit('increment', 10)
      }, 1000)
    }
  },
  getters: {
    numb(state) {
      return state.count % 2
    }
  },
  modules: {
  }
})
