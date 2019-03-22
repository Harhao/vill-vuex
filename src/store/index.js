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
