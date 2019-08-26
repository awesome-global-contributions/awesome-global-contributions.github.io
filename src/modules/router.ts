import VueRouter from 'vue-router'
import ListPage from '../pages/ListPage.vue'

const routes = [
  {
    path: '/',
    component: ListPage,
  },
]

const router = new VueRouter({
  routes,
})

export default router
