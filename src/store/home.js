const home = {
    namespaced: true,
    state: {
        name: 'jeremy-home',
        list: [
            {name: 'jeremy', age: 10},
            {name: 'allan', age: 20},
            {name: 'niko', age: 30},
        ]
    },
    mutations: {
        add(state, v) {
            state.list = state.list.concat(v)
        }
    },
    actions: {
        async inAsync({ state, commit, rootState }) { // 还有dispatch
            console.log(state, rootState)
            try{
                const result = await 10;
                commit('change', result, {root: true})
            }catch(err) {
                console.log(err)
            }
        }
    },
    getters: {
        calcs(state, getters, rootState) {
            return state.name + rootState.total
        }
    }
}
export default home