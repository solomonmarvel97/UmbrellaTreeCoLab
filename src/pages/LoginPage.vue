<template>
  <div class="main">
    <div class="main-item-1">
      <div class="image-block in"></div>
    </div>

    <div class="main-item-2">
      <div class="form-block">
        <div class="col-lg-6 mx-auto">
          <div class="osahan-login py-4">
            <div class="text-center mb-4">
              <a href="index.html"
                ><img
                  src="@/assets/images/logo.png"
                  style="width: 100px"
                  alt=""
              /></a>
              <h5 class="font-weight-bold mt-3">Welcome Back</h5>
            </div>

            <!-- error message -->
            <div v-if="error" class="alert alert-danger" role="alert">
              Login Failed
            </div>

            <!-- success message -->
            <div v-if="success" class="alert alert-success" role="alert">
              Login Successful
            </div>

            <!-- login form -->
            <form action="">
              <!-- email  -->
              <div class="form-group">
                <label class="mb-1">Email</label>
                <div class="position-relative icon-form-control">
                  <!-- <i class="fas fa-envelope position-absolute"></i> -->
                  <input type="email" class="primary_text_input form-control" />
                </div>
              </div>

              <!-- password -->
              <div class="form-group">
                <label class="mt-2 mb-1">Password</label>
                <div class="position-relative icon-form-control">
                  <!-- <i class="fas fa-key position-absolute"></i> -->
                  <input
                    type="password"
                    class="primary_text_input form-control"
                  />
                </div>
              </div>

              <!-- remember me checkbox -->
              <div class="custom-control custom-checkbox mb-3">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="mt-2 mb-1">Remember me</label>
              </div>
              <a class="btn primary_button btn-block" href="dashboard">
                Sign in
              </a>

              <div class="py-3 align-item-center" style="text-align: center">
                <a href="forgot-password.html">Forgot password?</a>
                <p>
                  <span class="ml-auto">
                    Don't have an account?
                    <router-link to="register">Create One</router-link>
                    </span>
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
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "login",
  data() {
    return {
      error: false,
      success: false,
      type: "password",
      enabled: true,
      isError: false,
      loginButtonText: "Log In",
      errorMessage: "",
      isLoading: false,
      status: "",
      loginInfo: {
        login_id: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters("auth", { currentUser: "currentUser" }),
    ...mapState("auth", { userRole: "userRole", isActive: "isActive" }),
  },
  methods: {
    ...mapActions("auth", { logoutUser: "logoutUser", loginUser: "loginUser" }),
    login() {
      this.enabled = false;
      this.loginButtonText = "Signing In...";
      this.loginUser({ user: this.loginInfo }).then((response) => {
        // if (this.isActive == "pending") {
        //   this.$router.reload()
        //   return
        // }
        //check if login_id had been verified
        if (this.isActive == "pending") {
          this.$router.replace({
            path: "verifyRregistration",
            query: { login_id: this.loginInfo.login_id },
          });
          return;
        } else {
          switch (this.userRole) {
            case "user":
              this.$router.replace("dashboard");
              break;
            case "admin":
              this.$router.go("admin/panel");
              break;
          }
        }
        this.enabled = true;
        this.loginButtonText = "Log In";
      });
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
