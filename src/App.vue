<template>
  <div id="app">
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
    <router-view/>
  </div>
</template>

<script>
import './assets/reset.sass'
import {mapGetters} from 'vuex'
import Header from './components/header'
import SideBar from './components/sideBar'
import Loading from './components/loading'
export default {
  name: 'App',
  components: {
    Header,
    SideBar,
    Loading
  }
}
</script>
