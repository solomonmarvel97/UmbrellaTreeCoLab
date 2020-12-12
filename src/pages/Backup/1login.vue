<template>
  <div class="login-container">
    <div class="container">
      <div class="main-content">
        <div class="app-info">
          <h1> Your Business Account</h1>
          <p>
            Donec dictum nisl nec mi lacinia, sed maximus tellus eleifend. Proin
            molestie cursus sapien ac eleifend.
          </p>
          <img src="@/assets/images/image.jpg" alt="" />
        </div>
        <div class="form-wrapper">
          <h2>Login to your Account</h2>
          <p>Enter your details to login.</p>
          <form @submit.prevent="login">
            <div>
              <label>Email Address</label>
              <input
                class="input-group"
                type="email"
                placeholder="Enter email address"
                v-model="loginInfo.login_id"
                :disabled="!enabled"
              />
            </div>
            <div>
              <label>Password</label>
              <input
                class="input-group"
                placeholder="Enter password"
                v-model="loginInfo.password"
                :disabled="!enabled"
                :type="type"
              />
            </div>
            <div v-if="isError" class="alert alert-danger">
              {{ errorMessage }}
            </div>
            <div>
              <input
                class="checkbox-control"
                type="checkbox"
                name="rememeber-me"
                id="remember-me"
                v-model="$store.state.rememberMe"
              />
              <label class="checkbox-label" for="remember-me"
                >Remember Me</label
              >
            </div>
            <button
              :disabled="
                (loginInfo.login_id.length && loginInfo.password.length) < 1 ||
                !enabled
              "
              type="submit"
            >
              {{ loginButtonText }}
            </button>
          </form>
          <p class="terms">
            <a href="/password_reset">Forgot your password?</a>
          </p>
          <p class="account">
            Dont have an account? <a href="register">Create an account</a>
          </p>
        </div>
      </div>
      <!-- <footer>
        <p>
          2019 Business login form. All Rights Reserved | Design by<a
            href="https://w3layouts.com"
            target="blank"
            >W3layouts</a
          >
        </p>
      </footer> -->
    </div>
  </div>
  <!-- <div>
    <div class="accountbg"></div>
  <div class="wrapper-page">
    <div class="card">
      <div class="card-body">
        <h3 class="text-center m-0">
          <a class="logo logo-admin" href="index.html">
            <img alt="logo" height="30" src="@/assets/images/logo.png" />
          </a>
        </h3>

        <div class="p-3">
          <h4 class="font-18 m-b-5 text-center">Welcome Back !</h4>
          <p class="text-muted text-center">Sign in to continue to Storm.</p>

          <form class="pt-3" @submit.prevent="login">
            <div class="form-group">
              <label>Login id</label>
              <input
                v-model="loginInfo.login_id"
                :disabled="!enabled"
                class="form-control"
                placeholder="Enter username/email address"
                type="email"
              />
            </div>

            <div class="form-group">
              <label>Password</label>
              <input
                v-model="loginInfo.password"
                :disabled="!enabled"
                :type="type"
                class="form-control"
                placeholder="Enter password"
              />
              <span
                @click="showPassword"
                v-if="type == 'password'"
                class="fa fa-fw fa-eye field-icon toggle-password"
              ></span>
              <span
                @click="showPassword"
                v-if="type != 'password'"
                class="fa fa-fw fa-eye-slash field-icon toggle-password"
              ></span>
            </div>

            <div v-if="isError" class="alert alert-danger">
              {{ errorMessage }}
            </div>

            <div class="form-group row m-t-20">
              <div class="col-sm-6">
                <div class="custom-control custom-checkbox">
                  <input
                    id="customControlInline"
                    class="custom-control-input"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="customControlInline"
                    >Remember me</label
                  >
                </div>
              </div>
              <div class="col-sm-6 text-right">
                <button
                  :disabled="
                    (loginInfo.login_id.length && loginInfo.password.length) <
                      1 || !enabled
                  "
                  class="btn btn-primary w-md waves-effect waves-light"
                >
                  {{ loginButtonText }}
                </button>
              </div>
            </div>

            <div class="form-group m-t-10 mb-0 row">
              <div class="col-12 m-t-20">
                <a class="text-muted" href="/password_reset">
                  <i class="mdi mdi-lock"></i> Forgot your password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="m-t-40 text-center">
      <p class="text-white">
        Don't have an account ?
        <a class="font-500 font-14 text-white font-secondary" href="register"
          >Create an account</a
        >
      </p>
    </div>
  </div>
</div> -->
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "login",
  data() {
    return {
      type: "password",
      enabled: true,
      isError: false,
      loginButtonText: "Log In",
      errorMessage: "",
      isLoading: false,
      status: "",
      logo_small: "images/logo-mobile.png",
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

<style scoped>
@import url("../assets/css/style.css");

/* Default Styles */
.login-container {
  min-height: 100vh;
  background: linear-gradient(to left, #f5f5f5 50%, #fff 50%);
}

a {
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 15px;
  font-weight: 600;
  outline: none;
}

a:hover {
  text-decoration: none;
}

a:focus,
a:hover {
  text-decoration: none;
}

p {
  color: #666;
  letter-spacing: 1px;
  /* line-height: 1.4rem; */
  font-size: 1rem;
  font-weight: 400;
}

input[type="button"],
input[type="submit"] {
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}

img {
  width: 100%;
}

/* Utility */
.container {
  width: 75%;
  margin: 0 auto;
  overflow: hidden;
}

.main-content {
  display: flex;
  flex-direction: row;
  padding: 3.5rem 0;
}

/* Media Query */
@media (max-width: 768px) {
  .container {
    background: #fff;
    width: 90%;
  }

  .main-content {
    display: flex;
    flex-direction: column;
  }
}

/* App-Info Section Styles */
.app-info {
  flex: 50%;
  padding-right: 3rem;
}

.app-info h1 {
  font-size: 40px;
  font-weight: 700;
  /* margin: 2.5rem 0rem 0.5rem 0rem; */
  color: #333;
}

/* Media Query */
@media (max-width: 768px) {
  .app-info {
    display: block;
    overflow: hidden;
    padding: 0;
    margin: auto;
  }

  .app-info h1 {
    margin-top: 0;
    font-size: 2rem;
  }
}

@media (max-width: 500px) {
  .app-info h1 {
    font-size: 2rem;
  }
}

/* App Form Styles */
.form-wrapper {
  flex: 50%;
  padding: 0rem 3rem 1rem 3rem;
}

.form-wrapper label {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #000;
}

.form-wrapper input[type="Password"],
.form-wrapper input[type="email"] {
  font-size: 1rem;
  color: #333;
  letter-spacing: 1px;
  padding: 14px 10px;
  display: inline-block;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: transparent;
}

.form-wrapper .input-group {
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd !important;
  background: #fff !important;
}

.form-wrapper .checkbox-control {
  margin-bottom: 20px;
}

.form-wrapper .checkbox-label {
  margin-left: 10px;
  text-transform: none !important;
}

.form-wrapper h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
  letter-spacing: 2px;
  text-transform: capitalize;
}

.form-wrapper p {
  font-size: 0.9rem;
  line-height: 1rem;
}

.form-wrapper p.alert {
  margin-top: 5px;
  color: red;
  font-weight: 800 !important;
}

.form-wrapper .invalid-input {
  border: red !important;
}

.form-wrapper button {
  background: #ff4040;
  border: none;
  color: #fff;
  font-size: 13px;
  padding: 12px 40px;
  letter-spacing: 2px;
  text-transform: uppercase;
  outline: none;
}

.form-wrapper p.terms {
  padding-top: 20px;
}

.form-wrapper p.account a,
.form-wrapper p.terms a {
  color: #ff4040;
  font-size: 0.9rem;
  text-decoration: underline;
}

.form-wrapper p.account a:hover,
.form-wrapper p.terms a:hover {
  text-decoration: none;
}

/* Media Query */
@media (max-width: 768px) {
  .form-wrapper {
    display: block;
    overflow: hidden;
    margin-top: 2.5rem;
    padding: 0;
  }
}

@media (max-width: 500px) {
  .form-wrapper h2 {
    font-size: 1.5rem;
  }
}
</style>
