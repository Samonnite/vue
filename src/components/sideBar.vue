<template>
  <div class="sidebar">
      <div class="sidebar-container" @click="hideNav" v-show="show">
          <div class="sidebar-overlay">
              <transition>
              <nav v-show="show">
                  <ul>
                      <li v-for="(key,menu) in menuList" :key="key">
                          <router-link :to="menu.path">
                              <span>{{menu.name}}</span>
                              <i class="icon iconfont icon-right"></i>
                          </router-link>
                      </li>
                  </ul>
              </nav>
              </transition>
          </div>
      </div>
  </div>
</template>

<script>
import '../assets/sidebar.sass'
export default {

}
</script>
