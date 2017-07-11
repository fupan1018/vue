import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import $ from 'jquery'  //通过指令cnpm install jquery@1.12.4 安装jq
import swiper from 'swiper'//cnpm install swiper@3.4.2 --save-dev
import Loading from '@/components/loading'

Vue.use(Loading);

//配置axios
axios.interceptors.request.use(function(config){//配置发送请求的信息
	store.dispatch('showLoading')
	return config;
},function(error){
	return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
