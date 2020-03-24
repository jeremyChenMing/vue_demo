# vue-cli3-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### vuex 注意事项
1. modules中每个模块的state，mutation，actions默认是注册到全局上的，如果加上namespaced: true,就编程私有化了,在调用时需要注意命名空间的调用
```js
computed: {
    ...mapState(["home"]),
    ...mapGetters("home",["calcs"]) // home 模块de getters, 这样才能在你需要的vue中去显示
}

// 触发
this.$store.commit('home/add', {name: 'add', age: 1}) // 需要加入命名空间


// module 局部actions也有全局的state
actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment') // 触发的是局部的mutations
      }
    }
} 
// 例如文件foo：局部的getters中访问全局的，可以传入第三个第四个参数
    getters: {
      // 在这个模块的 getter 中，`getters` 被局部化了
      // 你可以使用 getter 的第四个参数来调用 `rootGetters`
      someGetter (state, getters, rootState, rootGetters) {
        getters.someOtherGetter // -> 'foo/someOtherGetter'
        rootGetters.someOtherGetter // -> 'someOtherGetter'
      },
      someOtherGetter: state => { ... }
    },


// 局部的actions中可以访问全局的mutations, 需要加入第三个参数{root: true}
commit('change', result, {root: true})
```

2. 表单和vuex绑定（例如input 的value值绑定的是vuex state中的值）
```js
// 需要
<input :value="message" @input="updateMessage">
// 0000
computed: {
  ...mapState({
    message: state => state.obj.message
  })
},
methods: {
  updateMessage (e) {
    this.$store.commit('updateMessage', e.target.value)
  }
}

// 00000
mutations: {
  updateMessage (state, message) {
    state.obj.message = message
  }
}
```
    - 除此之外还有两外一个方法，就是直接绑定v-model，然后访问属性的getter, setter
    ```js
    <input v-model="message">
    computed: {
        message: {
            get () {
            return this.$store.state.obj.message
            },
            set (value) {
            this.$store.commit('updateMessage', value)
            }
        }
    }
    ```
