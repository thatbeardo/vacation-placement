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
          <v-container>
            <v-layout row wrap align-center justify-space-around>
              <v-flex xs12 md6 xl6>
                <br><br>
                <v-flex class="my-3" xs12 md12 xl12>
                  <h2 class="headline blue--text">OUR CORE VALUES</h2>
                  <blockquote class="text-xs-justify">
                    {{values}}
                  </blockquote>
                </v-flex>
                <v-flex v-for="instructor in instructors" :key=instructor.name>
                  <instructor-card :instructorData="instructor"></instructor-card>
                </v-flex>
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
import InstructorCard from "./InstructorCard";
import instructors from "../data/instructors";
export default {
  name: "AboutUs",
  data() {
    return {
      instructors: [],
      values: `Incepted back in 2015, right after graduation, we have come a long way. It all began with one idea. To empower students with
      a set of skills which enables them to select the company they want to work for and not the other way round. We witnessed tremendous success 
      right from the first batch of C2C. Teaching students to code is our way of giving back to the society and fulfilling our social responsibility.
      We believe that fundamental concepts which are essentially the key ingredients for a successful career are often over looked. This is 
      where we step in. Having witnessed industry patterns, we know how to help you land a dream job. What makes us the right people for the job?
      Well, we have secured dream jobs and compiled an encyclopedia of fundamental concepts most often asked in an interview`
    };
  },
  created() {
    this.instructors = instructors;
  }
};
</script>

