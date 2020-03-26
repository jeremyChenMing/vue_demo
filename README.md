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





### 小技巧
1. echarts在页面自适应宽度，防止在刷新的时候变形，主要的技术手段的不采用setTimeout延迟来解决，利用生命周期及$nextTick
  - $nextTick: 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上
  ```js
  created() {
    his.$nextTick(() => {
      this.loadEchart(); // 这个是设计echart的方法
    });
  }
  mounted() {
    // b绑定resize方法， 在浏览器改变的时候再次执行
    let _this = this;
    window.onresize = function() {
      console.log("onresize");
      _this.myChart.resize(); // 实例myChart有resize方法用来重绘的
    };
  }
  methods: {
    loadEchart() {
      this.myChart = this.$echarts.init(document.getElementById("echartsBox"));
      const options = {...}
      this.myChart.setOption(options);
    }
  }
  // 那么以上的执行顺序就为created -> mounted -> $nextTick -> loadEchart
  ```