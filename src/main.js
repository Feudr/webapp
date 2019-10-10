// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入reset.css文件
import './assets/css/reset.css'
//引入iconfont.css文件
import './assets/css/iconfont.css'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
//引入axios
import axios from 'axios'
Vue.prototype.$http = axios
//Vuex
import store from './store/index.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
