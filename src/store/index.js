import Vue from 'vue'
import Vuex from 'vuex'
import com from './modules/com'
import cinema from './modules/cinema'
import details from './modules/details'
import film from './modules/film'
import home from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    com,
    home,
    cinema,
    details,
    film
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
