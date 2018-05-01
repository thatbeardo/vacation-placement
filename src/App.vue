<template>
  <div id=#app>

    <v-app>
      <v-toolbar class="white">
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn to="/" title="Home" icon>
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn to="/HallOfFame" title="Hall Of Fame" icon>
          <v-icon>account_balance</v-icon>
        </v-btn>
        <v-btn to="/AboutUs" title="About Us" icon>
          <v-icon>supervisor_account</v-icon>
        </v-btn>
        <v-btn to="/CourseContent" title="Course Content" icon>
          <v-icon>laptop_mac</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content>
        <router-view></router-view>
      </v-content>

      <v-footer class="blue light-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by
              <a class="white--text" href="https://www.linkedin.com/in/havanagrawal/" target="_blank">Havan</a>
              and
              <a class="white--text" href="https://www.linkedin.com/in/harshil-mavani/">Harshil</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return { title: 'Campus To Corporate' };
  }
};
</script>
