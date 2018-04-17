import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Home from '../views/home'
import Details from '../views/details'
import Cinema from '../views/cinema'
import Film from '../views/film'

Vue.use(Router)

export default new Router({
  history: true,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/details/:id',
          name: 'details',
          component: Details
        },
        {
          path: '/cinema/:id',
          name: 'cinema',
          component: Cinema
        },
        {
          path: '/film/:type',
          name: 'film',
          component: Film
        }
      ]
    }
  ]
})
