const digital = {
    namespaced: true,
    state: {
        list: [
            {name: '拍立得', cash: 100, value: 'pld'},
            {name: '卡西欧', cash: 300, value: 'kxo'},
            {name: '耳机', cash: 50, value: 'ej'},
            {name: '手环', cash: 10, value: 'sh'},
            {name: '手机', cash: 500, value: 'sj'},
        ],
        choice: []
    },
    mutations: {
        saveVal(state, v=[]) {
            let need = [];
            v.forEach( item => {
                need.push(state.list.find(k => k.value === item))
            })
            // this.commit('change', {need, type: 'digital'}, {root: true})
            state.choice = need
        }
    },
    actions: {
        
    },
    getters: {
        
    }
}
export default digital