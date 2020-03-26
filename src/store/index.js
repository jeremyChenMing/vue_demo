import Vue from 'vue'
import Vuex from 'vuex'
import digital from './modules/digital'
import house from './modules/house'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopping: 0,
  },
  mutations: {
    
  },
  actions: {
    buy({state}) {
      return new Promise((resolve) => {
        setTimeout(() => {
          // commit('someMutation')
          state.digital.choice = []
          state.house.choice = []
          resolve('购买成功！')
        }, 1000)
      })
    }
  },
  getters: {
    listData(state){
      return state.digital.choice.concat(state.house.choice)
    }
  },
  modules: {
    digital: digital,
    house: house,
  }
})
