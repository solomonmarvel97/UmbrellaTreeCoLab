<template>
  <div class="main">
    <div class="main-item-1">
      <div class="image-block up"></div>
    </div>
    <div class="main-item-2">
      <div class="form-block">
        <div class="col-lg-6 mx-auto">
          <div class="osahan-login py-4">
            <div class="text-center mb-4">
              <a href="index.html"
                ><img src="@/assets/images/logo.png" style="width: 100px" alt=""
              /></a>
              <h5 class="font-weight-bold mt-3">Empowering Women For Tech</h5>
              <h5 class="font-weight-bold mt-3">Sign up for free</h5>
            </div>
            <!-- signup form -->

            <!-- error message -->
            <div v-if="error" class="alert alert-danger" role="alert">
              Login Failed
            </div>

            <!-- success message -->
            <div v-if="success" class="alert alert-success" role="alert">
              Login Successful
            </div>

            <form action="https://askbootstrap.com/preview/miver/index.html">
              <!-- full name -->
              <div class="form-group">
                <label class="mb-1">Full Name</label>
                <div class="position-relative icon-form-control">
                  <i class="mdi mdi-account position-absolute"></i>
                  <input type="text" class="primary_text_input form-control" />
                </div>
              </div>

              <!-- email -->
              <div class="form-group">
                <label class="mb-1 mt-2">Your Email</label>
                <div class="position-relative icon-form-control">
                  <input type="email" class="primary_text_input form-control" />
                </div>
              </div>

              <!-- password -->
              <div class="form-group">
                <label class="mb-1 mt-2">Set Password</label>
                <div class="position-relative icon-form-control">
                  <input
                    type="password"
                    class="primary_text_input form-control"
                  />
                </div>
              </div>

              <!-- agreement checkbox -->
              <div class="custom-control custom-checkbox mb-3 mt-4">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                I have read and accepted the terms and conditions stated on the
                <span><a href="agreement.html">agreement</a></span>
              </div>

              <a class="btn primary_button btn-block" href="login.html">
                Create account
              </a>

              <div class="py-3 align-item-center" style="text-align: center">
                <p>
                  <span class="ml-auto">
                    Already have an account?
                    <a href="login.html">Sign in</a></span
                  >
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      error: false,
      success: false,
      type: "password",
      enabled: true,
      license_agreement: false,
      registrationButtonText: "Register",
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
      this.registrationButtonText = "Creating account...";
      // calling user registration action
      this.registerUser({ user: this.registrationInfo })
        .then((response) => {
          this.$router.push({
            path: "verifyRregistration",
            query: {
              name: this.registrationInfo.full_name,
              login_id: this.registrationInfo.login_id,
            },
          });
        })
        .then((response) => {
          this.enabled = true;
          this.registrationButtonText = "Register";
        })
        .catch((error) => {});
    },
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.btnText = "Hide Password";
      } else {
        this.type = "password";
        this.btnText = "Show Password";
      }
    },
  },
};
</script>
