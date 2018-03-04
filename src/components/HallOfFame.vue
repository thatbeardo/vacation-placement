<template>
  <v-app>
    <v-toolbar class="white">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>home</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax :src="require('../assets/hero.jpg')" height="600">
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
      firstName: "Harshil",
      lastName: "Mavani",
      designation: "Software Engineer",
      company: "Cimpress India",
      avatar: "",
      year: "2015",
      testimony:
        "It is amazing how we can host this website for free and have a massive impact on publicity"
    });
  }
};
</script>
