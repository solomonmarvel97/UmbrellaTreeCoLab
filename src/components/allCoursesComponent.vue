<template>
  <div class="col-8 right">
              <div class="recommended">
                <div class="row">
                  <div
                    class="col-5 m-3"
                    v-for="course in courses"
                    v-bind:key="course.id">
                    <div>
                      <a href="#">
                        <img class="img-fluid" :src="course.image_url" />
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
                              <a href="profile.html">{{ course.title }}</a>
                              <span class="level hint--top level-one-seller">
                                {{ course.series }}
                              </span>
                            </span>
                          </div>
                          <h3>{{ course.description }}</h3>
                          <div class="footer">
                            <div class="price">
                              <a
                                :href="course.action"
                                class="btn small_primary_button"
                                >Enroll</a
                              >
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
export default {
  name: "allCourses",
data() {
    return {
      courses: [
        {
          id: "1",
          title: "Introduction to Machine Learning",
          series: "Man and Machine",
          description:
            "Path to mastering the basics of machine learning & python",
          image_url: require("@/assets/images/ml.png"),
          action: "enroll",
        },
        {
          id: "2",
          title: "Blockchain Technology for dummies",
          series: "Man and Machine",
          description: "Introduction to the basics of blockchain technology",
          image_url: require("@/assets/images/bc.png"),
          action: "enroll",
        },
        {
          id: "3",
          title: "SciKit Learn - A new approach to Machine learning",
          series: "Intelligence without brains",
          description: "Introductory guide to approaching Machine Learning  ",
          image_url: require("@/assets/images/intelligence.png"),
          action: "enroll",
        },
        {
          id: "4",
          title: "Beginners guide to tensorflow and Kerras",
          series: "Intelligence without brains",
          description: "Building machine learning models using tensorflow",
          image_url: require("@/assets/images/tensorflow.png"),
          action: "enroll",
        },
      ],
    };
  },
}
</script>

<style>

</style>