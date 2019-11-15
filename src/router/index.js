import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Project from '@/pages/Project'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: Home
//     },
//     {
//       path: '/:slug',
//       name: 'Project',
//       component: Project,
//       props: true
//     },
//   ],
//   scrollBehavior(to, from, savedPosition) {
//     return { x: 0, y: 0 }
//   }
// })

const routes = [
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
]

export default routes;