<template>
    <div class="wrap" v-scroll="showTop">
      <Header :com="comConf"></Header>
      <div class="container">
        <transition :name="transitionName">
          <router-view class="child-view"></router-view>
        </transition>
      </div>
      <Loading v-show="loading"></Loading>
      <SideBar></SideBar>
      <div class="go-top" @click="gotop" :class="goTop ? 'active' : ''"><i class="icon iconfont icon-top-copy"></i></div>
    </div>
</template>

<script>
import './assets/reset.sass'
import {mapGetters} from 'vuex'
import Header from './components/header'
import SideBar from './components/sideBar'
import Loading from './components/loading'
export default {
  data () {
    return {
      transitionName: 'slide-left',
      goTop: false
    }
  },
  created: function () {
    if (this.$route.name === undefined) {
      return this.$router.push('home')
    }
    this.$store.commit('COM_CONF', {isFooter: true})
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'sleder-left'
    }
  },
  computed: mapGetters({
    comConf: 'comConf',
    loading: 'loading'
  }),
  components: {
    Header,
    SideBar,
    Loading
  },
  methods: {
    showTop: function () {
      if (document.body.scrollTop > 200) {
        this.goTop = true
      } else {
        this.goTop = false
      }
    },
    // 返回顶部
    gotop: function () {
      let speed = 10
      let timer = setInterval(function () {
        if (document.body.scrollTop > 0) {
          document.body.scrollTop = document.body.scrollTop-speed > 0 ? document.body.scrollTop-speed : 0
          speed += 20
        } else {
          clearInterval(timer)
        }
      }, 16)
    }
  }
}
</script>
