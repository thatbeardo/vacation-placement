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

      <v-footer class="pa-3" color="blue lighten">
        <v-spacer></v-spacer>
        <div class="black--text">&copy; {{ new Date().getFullYear() }}</div>
      </v-footer>

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
