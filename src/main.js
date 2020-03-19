import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import gsap from "gsap";
import VueCollapse from 'vue2-collapse'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(vueSmoothScroll)
Vue.use(VueCollapse)
Vue.use(gsap)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
