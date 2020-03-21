import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import vueNcform from '@ncform/ncform'
import router from './modules/router'
import compontents from './components/formElements'

Vue.use(VueRouter)
Vue.use(vueNcform, {
  extComponents: compontents,
  lang: 'en-gb',
})

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
