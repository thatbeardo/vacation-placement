// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import StudentCard from './components/StudentCard'
import InstructorCard from './components/InstructorCard'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.component('student-card', StudentCard)
Vue.component('instructor-card', InstructorCard)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDQk9NjOnQGth9yKwn2-nvqFsT3e_BCCTo',
    libraries: 'places'
  }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
