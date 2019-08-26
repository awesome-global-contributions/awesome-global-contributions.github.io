import VueRouter from 'vue-router'
import CreatePage from '../pages/CreatePage.vue'
import ListPage from '../pages/ListPage.vue'

const routes = [
  {
    path: '/',
    component: ListPage,
  },
  {
    path: '/create',
    component: CreatePage,
  },
]

const router = new VueRouter({
  routes,
})

export default router
