<template>
  <v-app>

    <v-content>
      <section>
        <v-parallax :src="require('../assets/victory.jpg')" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1 class="white--text mb-2 display-4 text-xs-center">Hall of Fame</h1>
          </v-layout>
        </v-parallax>
      </section>

      <section class="my-5">
        <v-container fluid grid-list-xl>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 md8 xl8>
              <v-layout row wrap justify-space-between>

                <v-flex xs12 md4 lg3 xl3 v-for="student in studentList" :key="student.lastName">
                  <student-card :studentData="student"></student-card>
                </v-flex>
              </v-layout>

            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </v-app>

</template>

<script>
import StudentCard from "./StudentCard";
import * as studentList from "../data/students";
export default {
  name: "HallOfFame",
  component: { StudentCard },
  data() {
    return {
      studentList: [],
      title: "Campus to Corporate",
      show: false
    };
  },
  created() {
    this.studentList = studentList;
  }
};
</script>
