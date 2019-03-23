import Vue from "vue";
import Vuex from "../util/index";
Vue.use(Vuex);
const commander = {
  // modules:{
  //   commander3
  // },
  state: {
    num: 17
  },
  mutations: {
    fire(state) {
      state.num -= 1;
    }
  },
  getters: {
    fireCount(state) {
      return (17 - state.num) * 100;
    },
    totalCount(state, getters, rootState) {
      return getters.fireCount + rootState.count * 2;
    }
  },
  actions: {
    fireAsync({ commit }) {
      setTimeout(() => {
        commit("fire");
      }, 2000);
    }
  }
};
const commander2 = {
  state: {
    num2: 17
  },
  mutations: {
    fire2(state) {
      state.num2 -= 1;
    }
  },
  actions: {
    fireAsync2({ commit }) {
      setTimeout(() => {
        commit("fire2");
      }, 2000);
    }
  }
};
const commander3 = {
  state: {
    num3: 17
  },
  mutations: {
    fire3(state) {
      state.num3 -= 1;
    }
  },
  actions: {
    fireAsync3({ commit }) {
      setTimeout(() => {
        commit("fire3");
      }, 2000);
    }
  }
};
export default new Vuex.Store({
  modules: {
    commander,
    commander2
  },
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
  actions: {
    plus(context, n) {
      console.log(context);
      console.log(context.commit("increAge", n));
    }
  }
});
