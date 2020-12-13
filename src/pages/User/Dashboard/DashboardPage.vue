<template>
  <div class="freelance-projects py-5 dashboard">
    <div class="container" style="max-width: 1140px !important">
      
      <h2 class="text-center">{{timeOfTheDay}} Amaka, Choose a Program</h2>

      <!-- start program options -->
        <programsCard/>
        <!-- end program options -->

        <hr>
        <h4 class="text-center" style="font-weight: 900"> <a href="courses">See all courses</a> </h4>
        


        <h5 class="py-5" style="font-weight: 900"> Top 4 Courses </h5>

      
        
        <!-- start course card -->
        <courseCard/>
        <!-- end course card -->
      

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
