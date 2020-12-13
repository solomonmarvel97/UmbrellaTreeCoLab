<template>
  <div class="freelance-projects py-5 dashboard">
    <div class="container" style="max-width: 1140px !important">
      
      <h5 class="text-center">{{timeOfTheDay}} Amaka<br> <span><a href="courses">Take a Course</a></span> | <span><a href="job_board">Jobs near you</a></span></h5>

        <programsCard/>

        <hr>


        <h5 class="text-center py-5" style="font-weight: 900"> Top 4 Courses </h5>
        

        <courseCard/>      

    </div>
  </div>
</template>

<script>

import courseCard from './components/courseCard'
import programsCard from './components/programsCard'

export default {
  components: {
      courseCard,
      programsCard
    },
  data() {
    return {
        timeOfTheDay: ''
      }
    },
  methods: {
    greeting(){
      var time = new Date().getHours();
      if (time < 10) {
        this.timeOfTheDay = "Good morning";
      } else if (time < 20) {
        this.timeOfTheDay = "Good day";
      } else {
        this.timeOfTheDay = "Good evening";
      }
    }
  },
  computed() {
    
  },
  mounted(){
    this.greeting()
  }
};
</script>

<style></style>
