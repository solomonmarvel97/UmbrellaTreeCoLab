<template>
        <section>
            <div class="row freelance-slider">
                <div class="col-lg-6" v-for="course in courses" v-bind:key="course.id">
                    <div class="home_cards">
                        <p class="home_card_title"> {{course.title}} </p>
                        <div class="splitscreen">
                        <div class="left">
                            <p class="home_card_description"> {{course.description}} </p>
                        </div>
                        <div class="right">
                            <img class="splitscreen_image" :src="course.image_url" /> 
                        </div>
                        </div>
                        <a class="btn start_button btn-block" :href="course.action"> Start Now </a>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: "courseCard",
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
      ]
    }
}
}
</script>

<style>

</style>