import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";
//    - - - - - - - plugins - - - - - - - -
//vue-js-modal
import VueJSModal from "vue-js-modal";
// notification
import Notifications from "vue-notification";

Vue.use(VueRouter);

Vue.use(VueJSModal, {
  dialog: true,
  dynamicDefaults: {
    draggable: true
  }
})

//vue-moments
Vue.use(require('vue-moment'));

Vue.use(Notifications);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
