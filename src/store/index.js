import Vue from "vue";
import Vuex from "vuex";
// import { TOKEN, NAME } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    name: ""
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    }
  },
  actions: {
    Login({ commit }) {
      return new Promise((resolve, reject) => {
        console.log(commit, resolve, reject);
        // commit("SET_TOKEN", token);
        // commit("SET_NAME", name);
        // Vue.ls.set(TOKEN, token);
        // Vue.ls.set(NAME, name);
      });
    },
    // 登出
    Logout() {
      return new Promise(resolve => {
        Vue.ls.clear();
        resolve();
      });
    }
  }
});
