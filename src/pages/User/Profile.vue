<template>
  <div class="main-page second py-5">
    <div class="container">
      <div class="row">
        
        <!-- profile card -->
        <div class="col-lg-4 left">
          <div class="profile_info">
            <div class="seller-card">
              <div>
                <div class="user-online-indicator is-online"
                  data-user-id="1152855">
                  <i class="fa fa-circle"></i>online
                </div>
              </div>
              <div><a href="#" class="ambassadors-badge">Beneficiary</a></div>
              <div class="user-profile-info">
                <div>
                  <div class="user-profile-image">
                    <label class="user-pict">
                      <img
                        src="@/assets/images/profile.png"
                        class="img-fluid user-pict-img"
                        alt="Askbootstrap" />
                      <a
                        href="#"
                        class="user-badge-round user-badge-round-med locale-en-us top-rated-seller"
                      ></a
                    ></label>
                  </div>
                </div>
                <div class="user-profile-label">
                  <div class="username-line">
                    <a href="#" class="seller-link">Gloria Amaka</a>
                  </div>
                  <div class="oneliner-wrapper">
                    <small class="oneliner">Artificial Intelligence Trainee</small>
                  </div>
                </div>
              </div>
              <div class="buttons-wrapper">
                <a
                  href="#"
                  class="btn-lrg-standard btn-contact-me js-contact-me js-open-popup-join"
                  >Update Profile</a
                >
              </div>
            </div>
          </div>

          <div class="seller-profile">
            <div class="description">
              <h3>Description</h3>
              <p>
                I am a Artificial Intelligence Trainee from Nigeria. I like everything from
                video games to phone systems to explainer videos to children's
                books. I am originally from the South East of Nigeria.
              </p>
              <p class="">Country: <strong>Nigeria</strong></p>
            </div>
            <div class="languages">
              <h3>Languages</h3>
              <ul>
                <li>English&nbsp;&nbsp;- <span>Fluent</span></li>
                <li>
                  French&nbsp;<strong>(français)</strong>&nbsp;-
                  <span>Basic</span>
                </li>
              </ul>
            </div>

            <div class="skills">
              <h3>Skills</h3>
              <ul>
                <li class=""><a href="#">Machine Learning</a></li>
                <li class=""><a href="#">Deep Learning</a></li>
                <li class=""><a href="#">Algorithm Design</a></li>
                <li class=""><a href="#">Blockchain Technology</a></li>
              </ul>
            </div>
            <div class="education-list list">
              <h3>Education</h3>
              <ul>
                <li>
                  <p>B.Sc Computer Science</p>
                  <p>University of Benin, Edo State, Nigeria.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end profile card -->

        <div class="col-lg-8 right">
          <h2>My Courses</h2>
          <div class="recommended">
            <div class="row">
              <div class="col-md-4">
                <div>
                  <a href="#">
                    <img class="img-fluid" src="@/assets/images/ml.png" />
                  </a>
                  <div class="inner-slider">
                    <div class="inner-wrapper">
                      <div class="d-flex align-items-center">
                        <span class="seller-image">
                          <img
                            class="img-fluid"
                            src="@/assets/images/trainer.png"
                            alt=""
                          />
                        </span>
                        <span class="seller-name">
                          <a href="training_area"
                            >Ultimate Machine Learning Course</a
                          >
                          <span class="level hint--top level-one-seller">
                            Artificial Intelligence
                          </span>
                        </span>
                      </div>
                      <h3>Start building Machine Learning Models that scale</h3>
                      <div class="content-info">
                        <div class="rating-wrapper">
                          <div class="progress">
                            <div
                              class="progress-bar bg-warning"
                              role="progressbar"
                              style="width: 75%"
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="footer">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        <div class="price">
                          <a href="training_area"> Continue Learning </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div>
                  <a href="#">
                    <img class="img-fluid" src="@/assets/images/bc.png" />
                  </a>
                  <div class="inner-slider">
                    <div class="inner-wrapper">
                      <div class="d-flex align-items-center">
                        <span class="seller-image">
                          <img
                            class="img-fluid"
                            src="@/assets/images/ai.png"
                            alt=""
                          />
                        </span>
                        <span class="seller-name">
                          <a href="training_area"
                            >BlockChain Technology for Beginners</a
                          >
                          <span class="level hint--top level-one-seller">
                            Blockchain
                          </span>
                        </span>
                      </div>
                      <h3>
                        Start building Blockchain technologies Zero to Hero
                      </h3>
                      <div class="content-info">
                        <div class="rating-wrapper">
                          <div class="progress">
                            <div
                              class="progress-bar bg-info"
                              role="progressbar"
                              style="width: 25%"
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="footer">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        <div class="price">
                          <a href="training_area"> Continue Learning </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    };
  },
  computed: {},
  methods: {},
};
</script>
