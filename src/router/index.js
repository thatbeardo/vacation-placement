import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import AboutUs from '@/components/AboutUs'
import HallOfFame from '@/components/HallOfFame'
import CourseContent from '@/components/CourseContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/HallOfFame',
      name: 'HallOfFame',
      component: HallOfFame
    },
    {
      path: '/CourseContent',
      name: 'CourseContent',
      component: CourseContent
    }
  ]
})
