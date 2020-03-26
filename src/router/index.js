import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layouts/Layout.vue'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Index,
}, {
  path: '/shopping',
  name: 'shopping',
  component: Layout,
  children: [{
    path: '/shopping',
    redirect: 'list'
  }, {
    path: 'list',
    component: () => import('../views/Home.vue'),
  }, {
    path: 'buy',
    component: () => import('../views/Buy.vue')
  }]
}, {
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router