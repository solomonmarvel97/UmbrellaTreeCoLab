import Vue from "vue";
import Vuex from "vuex";
import blogs from "./modules/blogs";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      blogs
    },
    plugins: [createPersistedState()],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store;
}
