import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";
import Notifications from "vue-notification";
import VueSwal from 'vue-swal'


Vue.use(VueSwal)
Vue.use(VueRouter);
Vue.use(require('vue-moment'));
Vue.use(Notifications);


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
