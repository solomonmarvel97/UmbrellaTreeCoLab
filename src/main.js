import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";
import Notifications from 'vue-notification'
import VueSwal from 'vue-swal'
var VueScrollTo = require('vue-scrollto');
import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Loading);
Vue.use(VueSwal)
Vue.use(VueRouter);
Vue.use(require('vue-moment'));
Vue.use(Notifications)
// Vue.use(VueScrollTo);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
