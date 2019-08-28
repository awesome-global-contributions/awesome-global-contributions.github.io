import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import vueNcform from '@ncform/ncform'
import router from './modules/router'

Vue.use(VueRouter)
Vue.use(vueNcform, {
  extComponents: [
  ],
  lang: 'en-gb',
})

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
