import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Project from '@/pages/Project'
import NotFound from '@/views/NotFound'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:slug',
      name: 'Project',
      component: Project,
      props: true
    },
    {
      path: '*',
      name: 'all',
      component: NotFound
    }
  ]
})