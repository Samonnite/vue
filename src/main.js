import Vue from 'vue'
import router from './router/index.js'
import store from './store'

Vue.config.debug = true
// 自定义滚动指令
Vue.directive('scroll', {
  bind: function (el, binding) {
    window.addEventListener('scroll', () => {
      let fnc = binding.value
      fnc(el)
    })
  }
})
const app = new Vue({
  router,
  store
}).$mount('#app')
