<template>
<section>
  <navBar/>
  <router-view></router-view>
  <foot/>
</section>
</template>

<script>
import navBar from '@/components/nav.vue';
import foot from '@/components/footer.vue';

export default {
  components: {
    navBar,
    foot
  },
}
</script>

<style>

</style>