<template>
  <v-app>

    <v-content>
      <section>
        <v-parallax :src="require('../assets/squad.jpg')" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1 class="white--text mb-2 display-4 text-xs-center">Meet the Squad</h1>
          </v-layout>
        </v-parallax>
      </section>

      <section>

      </section>
    </v-content>
  </v-app>

</template>

<script>
export default {
  name: "AboutUs"
};
</script>
