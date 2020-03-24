const about = {
    namespaced: true,
    state: {
        name: 'jeremy-about',
        list: [
            {name: '利息', age: 5},
            {name: '中观', age: 15},
            {name: '回填', age: 25},
        ]
    },
    mutations: {
        add(state, v) {
            state.list = state.list.concat(v)
        }
    },
    actions: {
        
    },
    getters: {
        
    }
}
export default about