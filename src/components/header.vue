<template>
  <div id="header">
      <div class="go-menu" @click="showNav"><i class="icon iconfont icon-menu"></i></div>
      <div class="title"><p>{{com.title}}</p><a href="" class="go-city"><i class="icon iconfont icon-bottom"></i></a></div>
      <a href="" class="go-mine"><i class="icon iconfont icon-people"></i></a>
  </div>
</template>

<script>
import '../assets/header.sass'
import '../assets/icon/iconfont.css'
export default {
  props: {
    com: {
      type: Object
    }
  },
  methods: {
    showNav: function () {
      return this.$store.dispatch('changeLeftNavState', true)
    }
  }
}
</script>
