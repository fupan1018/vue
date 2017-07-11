import Vue from 'vue'
import Router from 'vue-router'
import Discover from '@/components/discover'
import Film from '@/components/film'
import Room from '@/components/room'
import Order from '@/components/order'
import cityName from '@/components/other/cityName'
import orderFilm from '@/components/other/orderFilm'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/discover',
      name:'discover',
      component: Discover,
      linkActiveClass:'active'
    },
    {
      name:'cityName',
      path:'/other/cityName/:type',
      component:cityName
    },
    {
      name:'orderFilm',
      path:'/other/orderFilm/:id',
      component:orderFilm
    },
    {
      path: '/film',
      name:'film',
      component: Film
    },
    {
      path: '/room',
      name:'room',
      component: Room
    },
    {
      path: '/order',
      name:'order',
      component: Order
    },
    {
    	path:'*',
    	name:'discover',
    	redirect:'/discover'
    }
  ],
  linkActiveClass:'active'//这个属性可以为被选中的路由增加相应的选中状态class
})
