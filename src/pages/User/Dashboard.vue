<template>
  <div class="freelance-projects py-5 dashboard">
    <div class="container" style="max-width: 1140px !important">
      <div align="center">
        <h2 style="font-weight: 900">Hi Amaka, Choose a Program</h2>
        <h4 style="font-weight: 900">
          <a href="courses"> View available courses </a>
        </h4>
        <hr style="color: rgb(209, 209, 209)" />
      </div>
      <div class="row freelance-slider">
      
        <div class="col-lg-6" v-for="course in courses" v-bind:key="course.id">
          <div class="home_cards">
            <p class="home_card_title">
              {{course.title}}
            </p>
            <div class="splitscreen">
              <div class="left">
                <p class="home_card_description"> {{course.description}} </p>
              </div>
              <div class="right">
                <img class="splitscreen_image" :src="course.image_url" /> 
              </div>
            </div>
            <a class="btn start_button btn-block" :href="course.action">
              Start Now
            </a>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      courses: [
        {
          id: '1',
          title: 'Machine Learning', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit duis tristique. ', 
          image_url: require('@/assets/images/ml.png'), 
          action: 'profile'
        },
        {
          id: '2',
          title: 'AR & VR Training', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit duis tristique. ', 
          image_url: require('@/assets/images/ar.png'), 
          action: 'profile'
        },
        {
          id: '3',
          title: 'Artificial Intelligence', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit duis tristique. ', 
          image_url: require('@/assets/images/ai.png'), 
          action: 'profile'
        },
        {
          id: '4',
          title: 'Blockchain Technology', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit duis tristique. ', 
          image_url: require('@/assets/images/bc.png'), 
          action: 'profile'
        },
      ]}
    },
  methods: {
  }
};
</script>

<style></style>
