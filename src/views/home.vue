<template>
  <div id="home">
    <div class="banner">
      <swiper class="banner-swiper">
        <swiper-slide class="slide" v-for="item in banner">
          <a :href="item.url" target="_blank">
            <img :src="item.umageUrl" alt="">
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <div class="now-playing">
      <div class="item" v-for="item in nowplay">
        <router-link :to="{name:'details',params:{id:item.id}}">
          <img :src="item.cover.origin" alt="">
          <div class="desc">
            <div class="info">
              <h4>{{item.name}}</h4>
              <p>{{item.cinemaCount}}家影院上映{{item.watchCount}}人购票</p>
            </div>
            <div class="count">{{item.count}}</div>
          </div>
        </router-link>
      </div>
      <router-link :to="{name:'flim',params:{type:'now-playing'}}" class="go-more">
        更多热映电影
      </router-link>
    </div>
    <div class="coming-title">
      <div>即将上映</div>
    </div>
    <div class="coming-soon">
      <div class="item" v-for="item in coming">
        <router-link :to="{name:'details',params:{id:item.id}}">
          <img :src="item.cover.origin" alt="">
          <div class="desc">
            <div class="info">
              <h4>{{item.name}}</h4>
            </div>
            <div class="time">{{item.premiereAt|formatDate}}</div>
          </div>
        </router-link>
        <router-link :to="{name:'film',params:{type:'coming-soon'}}" class="go-more">
          更多即将上映电影
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/home.sass'
import {mapGetters} from 'vuex'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        autoHeight: true
      }
    }
  }
}
</script>
