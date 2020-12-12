<template>
  <div class="bg-white">
    <div class="container">
      <div class="row justify-content-center align-items-center d-flex vh-100">
        <div class="col-lg-4 mx-auto">
          <div class="osahan-login py-4">
            <div class="text-center mb-4">
              <h5 class="font-weight-bold mt-3">Create an Account</h5>
              <p class="text-muted">
                Don't miss your next opportunity as an African. Sign up to stay
                updated on your professional world.
              </p>
            </div>

            <!-- error message -->
            <div class="alert alert-danger" role="alert">Sign up error</div>

            <!-- success message -->
            <div class="alert alert-success" role="alert">Sign up success</div>

            <form action="https://askbootstrap.com/preview/miver/index.html">
              <!-- first name -->
              <div class="form-group">
                <label class="mb-1">First Name</label>
                <div class="position-relative icon-form-control">
                  <i class="mdi mdi-account position-absolute"></i>
                  <input type="text" class="form-control" />
                </div>
              </div>

              <!-- last name -->
              <div class="form-group">
                <label class="mb-1 mt-2">Last Name</label>
                <div class="position-relative icon-form-control">
                  <i class="mdi mdi-key-variant position-absolute"></i>
                  <input type="text" class="form-control" />
                </div>
              </div>

              <!-- gender -->
              <div class="form-group">
                <label class="mb-1 mt-2">Gender</label>
                <div class="position-relative">
                  <label
                    ><input type="radio" name="optradio" checked />Female</label
                  >
                  <label
                    ><input type="radio" name="optradio" checked />Male</label
                  >
                  <label
                    ><input type="radio" name="optradio" checked />Not
                    specified</label
                  >
                </div>
              </div>

              <!-- email -->
              <div class="form-group">
                <label class="mb-1 mt-2">Email Address</label>
                <div class="position-relative icon-form-control">
                  <i class="fas fa-envelope position-absolute"></i>
                  <input type="email" class="form-control" />
                </div>
              </div>

              <!-- password -->
              <div class="form-group">
                <label class="mb-1 mt-2">Password</label>
                <div class="position-relative icon-form-control">
                  <i class="fas fa-key position-absolute"></i>
                  <input type="password" class="form-control" />
                </div>
              </div>

              <!-- confirm password -->
              <div class="form-group">
                <label class="mb-1 mt-2">Confirm Password</label>
                <div class="position-relative icon-form-control">
                  <i class="fas fa-key position-absolute"></i>
                  <input type="password" class="form-control" />
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

              <button class="btn btn-success btn-block" type="submit">
                Create account
              </button>

              <div class="py-3 align-item-center">
                <p>
                  <span class="ml-auto">
                    Already have an account?
                    <a href="login.html">Log in</a></span
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
export default {};
</script>

<style></style>
