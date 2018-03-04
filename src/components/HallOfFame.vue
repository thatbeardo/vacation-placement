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

      <section>
        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <v-flex xs12 lg4 v-for="student in studentList" :key="student.lastName">
              <student-card :studentData="student"></student-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </v-app>

</template>

<script>
import StudentCard from "./StudentCard";
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
    this.studentList.push({
      firstName: "Harshil",
      lastName: "Mavani",
      designation: "Software Engineer",
      company: "Cimpress India",
      avatar: "",
      year: "2015",
      testimony:
        "It is amazing how we can host this website for free and have a massive impact on publicity"
    });
    this.studentList.push({
      firstName: "Havan",
      lastName: "Agrawal",
      designation: "Software Engineer",
      company: "Morgan Stanley",
      avatar: "",
      year: "2016",
      testimony:
        "Harshil is amazing. His teaching skills are god like. I feel he should get the next Bharat Ratna"
    });
    this.studentList.push({
      firstName: "Devika",
      lastName: "Shanbhag",
      designation: "Software Engineer",
      company: "J.P. Morgan",
      avatar: "",
      year: "2017",
      testimony:
        "Harshil is the most refined professor there ever will be. Havan needs to learn from Harshil"
    });
  }
};
</script>
