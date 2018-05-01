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
        <v-app light>
          <v-container fluid grid-list-xl>
            <v-layout justify-space-around>
              <v-flex xs2 md8 xl8>

                <v-layout row wrap justify-space-around>
                  <br><br>
                  <v-flex v-for="instructor in instructors" :key=instructor.name>
                    <instructor-card :instructorData="instructor"></instructor-card>
                  </v-flex>
                </v-layout>
              </v-flex>

            </v-layout>
            <br><br><br><br><br>
          </v-container>
        </v-app>
      </section>
    </v-content>
  </v-app>

</template>

<script>
import InstructorCard from './InstructorCard';
import instructors from '../data/instructors';
export default {
  name: 'AboutUs',
  created() {
    this.instructors = instructors;
  }
};
</script>

