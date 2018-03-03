import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vaccation-placement/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    }
  ]
})
