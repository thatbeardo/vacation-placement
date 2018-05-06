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

      <template>
        <v-footer height="auto" class="grey darken-3">
          <v-layout row wrap justify-center>
            <v-btn v-for="link in links" :key="link.text" :to=link.to color="white" flat>
              {{ link.text }}
            </v-btn>
            <v-flex xs12 py-3 text-xs-center white--text>
              &copy;2018 —
              <strong>Campus To Corporate</strong>
            </v-flex>
          </v-layout>
        </v-footer>
      </template>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Campus To Corporate',
      links: [
        { text: 'Home', to: '/' },
        { text: 'About Us', to: '/AboutUs' },
        { text: 'Course Content', to: '/CourseContent' },
        { text: 'Hall Of Fame', to: '/HallOfFame' }
      ]
    };
  }
};
</script>
