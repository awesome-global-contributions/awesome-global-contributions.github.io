import 'normalize.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import vueNcform from '@ncform/ncform'
import router from './modules/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import ncformStdComps from '@ncform/ncform-theme-elementui'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

library.add(faStar)
library.add(regStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)
Vue.use(Element)
Vue.use(vueNcform, {
  extComponents: ncformStdComps,
  lang: 'en-gb',
})

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
