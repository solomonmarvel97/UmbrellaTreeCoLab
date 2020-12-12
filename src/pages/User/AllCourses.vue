<template>
  <div class="main-page second py-5">
    <div class="container">
      <div class="row">
        <div class="right">
          <h2>All Courses</h2>
          <div class="row">
            
            <miniProfile/>
            <allCourses/>
            

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import miniProfile from '@/components/miniProfileComponent.vue';
import allCourses from '@/components/allCoursesComponent.vue';


export default {
  name: "Courses",
  components: {
    miniProfile,
    allCourses
  },
};
</script>

<style></style>
