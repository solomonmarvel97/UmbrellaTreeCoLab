import axios from "axios";
import Vue from "vue";
import marvelous from '../index.js'
import server from "../variables";
import config from "../config";

axios.defaults.baseURL = config;


export default {
  namespaced: true,

  state: {
    userRole: '', // stores the user role
    isActive: '',
    currentUser: {},
  },

  getters: {
    currentUser: (state) => state.currentUser, // getter that povides the details of the current user to the view
  },

  //mutations
  mutations: {
    //sets the current user details passed from the action in the state
    setCurrentUser(state, currentUser) {
      localStorage.clear()
      let auth_object = {
        token: currentUser.token,
        role: currentUser.role,
        isActive: currentUser.status,
      };
      Vue.notify({
        group: "auth",
        type: "success",
        text: "Signed in successfully, redirecting ...",
      });
      state.userRole = auth_object.role;
      state.currentUser = currentUser;
      state.isActive = auth_object.isActive;
      localStorage.setItem("credential", JSON.stringify(auth_object));
    },

    //mutation to create a new user
    new_user: (state, user) => state.users.unshift(user),

    //mutation to remove the current user from the state
    remove_current_user: (state, id) =>
      (state.users = state.users.filter((user) => user.id !== id)),

    //mutation to update the current user details using the user id
    update_current_user: (state, currentUser) => {
      const index = state.users.findIndex((user) => user.id === currentUser.id);
      if (index !== -1) {
        state.users.splice(index, 1, currentUser);
      }
    },

    //mutation to logout the current user and remove user details from the local storage
    logout_user(state) {
      state.currentUser = {};
      // localStorage.removeItem('vuex')
      localStorage.clear()
      location.reload();
    },
  },

  //auth actions
  actions: {
    // user login action
    async loginUser({commit}, payload) {
      const response = axios
        .post("users/login", payload, config)
        .then((response) => {
          commit("setCurrentUser", response.data.user);
        }).catch((error) => {
          var errors = JSON.stringify(error.response.data.errors
            ["login_id or password"][0]).toString();
          Vue.notify({
            group: "auth",
            type: "error",
            text: "username/password combination " + errors,
          });
          NProgress.done()
        });
      return response;
    },


    // user registration action
    async registerUser({commit}, payload) {
      const response = axios
        .post("users", payload, config)
        .then((response) => {
        })
        .catch((error) => {
        });
      return response;
    },



    // user registration action
    async sendVerificationMessage({commit}, payload) {
      const response = axios.get(`sendVerificationMessage/${payload.name}/${payload.login_id}`)
        .then((response) => {
          Vue.notify({
            group: "auth",
            type: "success",
            text: "Verification Sent. Proceed to verification",
          });
          // this.$router.replace('login')
        })
    },

    //user logout action
    logoutUser({commit}) {
      commit('logout_user');
    },
  },
};
