<template>
  <div id="app">
    <loading v-show="getLoading"></loading>
    <div class="main" v-show="getCityShow">
      <transition name="slide">  
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
      <k-foot></k-foot>
    </div>
    <div class="selectAddress" v-show="getSelectShow">
        <city-name></city-name>
    </div>
    <div class="selectAddress" v-show="getOrderShow">
        <order-film></order-film>
    </div>
  </div>
</template>

<script>
import kFoot from '@/components/footer/footer'
import cityName from '@/components/other/cityName'
import orderFilm from '@/components/other/orderFilm'
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components: {//加载组件
    kFoot,orderFilm,cityName
  },
  computed:{
    ...mapGetters(["getCityShow","getOrderShow","getSelectShow","getLoading"])
  },
  mounted:function(){
    //设置字体大小
    this.setFont();
  },
  methods:{
    setFont:function(){
      for (var userAgentInfo = navigator.userAgent, Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], flag = !0, v = 0; v < Agents.length; v++)
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          document.getElementsByTagName('html')[0].style.fontSize=window.screen.width/5+'px';
          return
        }
      document.getElementsByTagName('html')[0].style.fontSize=75+'px';
      return
    }
  }
}
</script>
<style>
  @import "./assets/js/bootstrap/css/bootstrap.min.css";
  @import "./assets/js/swiper/css/swiper.min.css";
  @import "./assets/css/index.css";
</style>
<style scoped>
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s ease
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
    z-index: 1;
    position:absolute;left:0;top:0;
  }
</style>
