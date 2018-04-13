<template>
  <div id="app">
    <Header></Header>
    <SideBar></SideBar>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header'
import SideBar from './components/sideBar'
export default {
  name: 'App',
  components: {
    Header,
    SideBar
  }
}
</script>

<style>

</style>
