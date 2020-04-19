import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Qanswers from '../views/Qanswers.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts'
import Offer from '../views/Offer.vue'
import Polit from '../views/Polit.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      reload: true
    },
    component: Home
  },
  {
    path: '/questions',
    name: 'questions',
    meta: {
      reload: true
    },
    component: Qanswers
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      reload: true
    },
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      reload: true
    },
    component: Contacts
  },
  {
    path: '/offer',
    name: 'offer',
    meta: {
      reload: true
    },
    component: Offer
  },
  {
    path: '/polit',
    name: 'polit',
    meta: {
      reload: true
    },
    component: Polit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 0)
    })
  }
})

export default router
