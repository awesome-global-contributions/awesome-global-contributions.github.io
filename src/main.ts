import 'normalize.css'
import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons'
import { faAngleDown, faAngleUp, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)
library.add(faAngleDown)
library.add(faAngleUp)
library.add(regStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
