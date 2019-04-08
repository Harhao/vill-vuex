# vill-vuex

> a vue plugins about data manage

## Build Setup

### install the plugin on bash and the sass module support

```
npm install vill-vuex --save-dev
```

### register the plugins on the vue project in the entry file (main.js)

```bash
import vuex from 'vill-vuex'
Vue.use(vuex);
```

### on the store file ,you can use it by the follow example

```bash
import Vue from "vue";
import Vuex from "../util/index";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    name: "kiwis",
    age: 22,
    job: "front-end-engineer"
  },
  mutations: {
    increAge(state, n = 1) {
      state.age += n;
    }
  },
  actions:{
    plus(context,n){
      console.log(context);
      console.log(context.commit('increAge',n));
    }
  }
});

```
### in the main entry file ,you need import store file to vuejs options
```bash
import Vue from 'vue'
import App from './App'
import store from './store/index';
import router from "./router";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

```

## License

[MIT](http://opensource.org/licenses/MIT)
