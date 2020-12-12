<template>
  <div
    class="fullscreen bg-blue-900 text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <!-- title message-->
      <div style="font-size: 20vh">
        404
      </div>

      <!-- error message-->
      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <!-- goto home button-->
      <q-btn
        class="q-mt-xl"
        color="white"
        label="Go Home"
        no-caps
        text-color="blue"
        to="/"
        unelevated
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "404"
};
</script>
