import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Router);

const router = new Router({
  routes,
  mode: "hash",
  // base: "/",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === "#experience") {
          position.offset = { y: 140 };
        }
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  },
});

// Start the route progress bar.
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

// Complete the animation of the route progress bar.
router.afterEach((to, from) => {
  NProgress.done();
});

// Verify all the proper access variables are present for proper authorization
/**
router.beforeEach((to, from, next) => {
  
  //major authentication driver
  var routerAuthCheck = false;

  if (localStorage.getItem("credential")) {
    var active = JSON.parse(localStorage.getItem("credential")).isActive;
    // let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // set localAuthTokenCheck true if unexpired / false if expired
    // routerAuthCheck = new Date().getTime() < expiresAt;
    if (active == "approved") {
      routerAuthCheck = true;
    }
  }

  if (to.matched.some((route) => route.meta.authPages)) {
    if (routerAuthCheck) {
      next({ name: "dashboard" });
    }
  } else {
    next();
  }

  // check if the route to be accessed requires authorizaton
  if (to.matched.some((route) => route.meta.requireAuth)) {
    if (routerAuthCheck) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

 */

 
export default router;
