<template>
  <div>
    <!-- Begin page -->
    <div class="accountbg"></div>
    <div class="wrapper-page">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center m-0">
            <a class="logo logo-admin" href="index.html">
              <img alt="logo" height="30" src="@/assets/images/logo.png"/>
            </a>
          </h3>

          <div class="p-3">
            <p class="text-muted text-center">Get your free Storm account now.</p>

            <form class="pt-3" @submit.prevent="register">
              <div class="form-group">
                <label>User ID</label>
                <input
                  v-model="registrationInfo.login_id"
                  :disabled="!enabled"
                  class="form-control"
                  placeholder="Enter your email or phone number"
                  type="email"
                />
              </div>

              <div class="form-group">
                <label>Full name</label>
                <input
                  v-model="registrationInfo.full_name"
                  :disabled="!enabled"
                  class="form-control"
                  placeholder="Enter full name"
                  type="text"
                />
              </div>

              <div class="form-group">
                <label>Password</label>
                <input
                  v-model="registrationInfo.password"
                  :disabled="!enabled"
                  :type="type"
                  class="form-control"
                  placeholder="Password should not be less than 6 characters"
                />
                <span v-if="type=='password'" class="fa fa-fw fa-eye field-icon toggle-password"
                      @click="showPassword"></span>
                <span v-if="type!='password'" class="fa fa-fw fa-eye-slash field-icon toggle-password"
                      @click="showPassword"></span>
              </div>

              <div class="mb-4 mt-4">
                <label for="license">
                  <input id="license" v-model="license_agreement" type="checkbox"/>
                  I agree to all Terms & Conditions
                </label>
              </div>

              <div class="mb-0 row">
                <div class="col-12">
                  <p class="font-14 text-muted mb-0">
                    By registering you agree to the Storm
                    <a href="#">Terms of Use</a>
                  </p>
                </div>
              </div>
              <div class="form-group row m-t-20">
                <div class="col-12 text-right">
                  <input
                    :disabled="
                      (registrationInfo.full_name.length &&
                        registrationInfo.login_id.length &&
                        registrationInfo.password.length &&
                        license_agreement) < 1 || !enabled
                    "
                    :value="registrationButtonText"
                    class="btn btn-primary w-md waves-effect waves-light"
                    type="submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="m-t-40 text-center">
        <p class="text-white">
          Already have an account ?
          <a
            class="font-500 font-14 text-white font-secondary"
            href="login"
          >Login</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      error:false,
      success:false,
      type: "password",
      enabled: true,
      license_agreement: false,
      registrationButtonText: 'Register',
      logo_small: "images/logo-mobile.png",
      logo_light: "images/logo-light.png",
      registrationInfo: {
        full_name: "Akporowho Marvelous",
        login_id: "solomnonmarvelous97@gmail.com",
        password: "test12345",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["registerUser"]),
    register() {
      this.enabled = false;
      this.registrationButtonText = "Creating account..."
      // calling user registration action
      this.registerUser({user: this.registrationInfo}).then((response) => {
        this.$router.push({
          path: 'verifyRregistration',
          query: {name: this.registrationInfo.full_name, login_id: this.registrationInfo.login_id}
        })
      }).then((response) => {
        this.enabled = true
        this.registrationButtonText = "Register"
      }).catch((error) => {
      })
    },
    showPassword() {
      if (this.type === 'password') {
        this.type = 'text'
        this.btnText = 'Hide Password'
      } else {
        this.type = 'password'
        this.btnText = 'Show Password'
      }
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/style.css");

.field-icon {
  float: right;
  color: dimagesray;
  margin-left: -25px;
  margin-right: 5px;
  margin-top: -25px;
  position: relative;
  z-index: 2;
}

.container {
  padding-top: 50px;
}
</style>
