import LoadingComponent from './Loading.vue'
const loading = {
  install: function(Vue) {
  	//loading是使用时候的组件名<loading></loading>
    Vue.component('loading', LoadingComponent)
  }
}
export default loading

