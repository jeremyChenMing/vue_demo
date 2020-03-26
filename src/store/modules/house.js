const house = {
    namespaced: true,
    state: {
        bul: [
            {name: '电饭煲', cash: 30, value: 'dfb'},
            {name: '冰箱', cash: 300, value: 'bx'},
            {name: '烤箱', cash: 150, value: 'kx'},
            {name: '洗碗机', cash: 200, value: 'xwj'},
            {name: '油烟机', cash: 300, value: 'yyj'},
            {name: '煤气灶', cash: 20, value: 'mqz'},
        ],
        choice: []
    },
    mutations: {
        saveVal(state, v=[]) {
            let need = [];
            v.forEach( item => {
                need.push(state.bul.find(k => k.value === item))
            })
            // this.commit('change', {need, type: 'house'}, {root: true})
            state.choice = need
        },
        reset(state) {
            state.choice = []
        }
    },
    actions: {
        
    },
    getters: {
        
    }
}
export default house