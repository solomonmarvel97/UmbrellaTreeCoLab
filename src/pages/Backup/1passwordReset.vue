<template>
  <div>
    <!-- Begin page -->
    <div class="accountbg"></div>
    <div class="wrapper-page">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center m-0">
            <a class="logo logo-admin" href="/index">
              <img alt="logo" height="30" src="@/assets/images/logo.png"/>
            </a>
          </h3>

          <div class="p-3">
            <h4 class="font-18 m-b-5 text-center">Reset Password</h4>
            <p class="text-muted text-center">Enter your Email and instructions will be sent to you!</p>

            <form class="pt-3" @submit.prevent="resetPassword">
              <div class="form-group">
                <label>Email</label>
                <input
                  v-model="user.email"
                  :disabled="!enabled"
                  class="form-control"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>

              <div class="form-group row m-t-20">
                <div class="col-12 text-right">
                  <input
                    :disabled="user.email.length < 1 || !enabled"
                    class="btn btn-primary w-md waves-effect waves-light"
                    type="submit"
                    value="Register"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="m-t-40 text-center">
        <p class="text-white">
          Remember It ?
          <a
            class="font-500 font-14 text-white font-secondary"
            href="/app/login"
          >Sign In Here</a>
        </p>
      </div>
    </div>
  </div>
  <!-- <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="main-panel">
        <div class="content-wrapper d-flex align-items-center auth px-0">
          <div class="row w-100 mx-0">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                <div class="brand-logo">
                  <img alt="logo" src="../../public/images/logo-light.png" />
                </div>
                <h4>New here?</h4>
                <h6 class="font-weight-light">
                  Signing up is easy. It only takes a few steps
                </h6>
                <form class="pt-3" @submit.prevent="register">
                  <div class="form-group">
                    <input
                      v-model="details.email"
                      :disabled="!enabled"
                      class="form-control form-control-lg"
                      placeholder="Email"
                      type="email"
                    />
                  </div>

                  <div class="text-center mt-4 font-weight-light">
                    You will receive a reset email if the user exists
                  </div>

                  <input
                    :disabled="(details.email.length) < 1 || !enabled"
                    class="btn btn-block btn-success btn-lg font-weight-medium auth-form-btn"
                    type="submit"
                    value="Reset Password"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>-->
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      enabled: true,
      logo_light: "images/logo-light.png",
      user: {
        email: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["resetUserPassword"]),
    resetPassword() {
      this.enabled = false;
      this.resetUserPassword({user: this.user});
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/style.css");
</style>
