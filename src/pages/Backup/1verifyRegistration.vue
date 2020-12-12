<template>
  <div class="back">
    <section class="fdb-block">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h1>Verify your email address</h1>
            <p class="lead">An email has been sent to <strong>{{ this.$route.query.login_id }} </strong></p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-6">
            <img alt="image" class="images-fluid mt-5" src="@/assets/images/draws/hosting.svg">
          </div>
        </div>
      </div>
    </section>
    <br><br>
    <section class="fdb-block">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 text-center">
            <p class="lead">Follow the email that has been sent to your mail to activiate your account. If you didn't
              receive any email, click the button below to resend.</p>
          </div>
        </div>
        <p class="h3 row justify-content-center">
          <button class="btn btn-primary" @click="verify_email_address">Click here to resend</button>
        </p>
        <p class="h3 row justify-content-center"><a class="btn btn-primary" href="login">Proceed to login</a></p>
      </div>
    </section>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "successful_sign_up",
  data() {
    return {
      name: this.$route.query.name,
      login_id: this.$route.query.login_id,
    }
  },
  methods: {
    ...mapActions("auth", ["sendVerificationMessage"]),
    verify_email_address() {
      this.sendVerificationMessage({name: this.$route.query.name, login_id: this.$route.query.login_id})
    }
  }
};
</script>

<style scoped>
.back {
  background-color: transparent !important;
  height: 100vh !important;
}
</style>
