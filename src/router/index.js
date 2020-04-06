import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      reload: true
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/questions',
    name: 'questions',
    meta: {
      reload: true
    },
    component: () => import('../views/Qanswers.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      reload: true
    },
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      reload: true
    },
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/offer',
    name: 'offer',
    meta: {
      reload: true
    },
    component: () => import('../views/Offer.vue')
  },
  {
    path: '/polit',
    name: SecurityPolicyViolationEvent,
    meta: {
      reload: true
    },
    component: () => import('../views/Polit.vue')
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
