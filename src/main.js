import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'

// Router
import router from "./router";

// For Vue Progressbar
const vueProgressbarOptions = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar, vueProgressbarOptions)

new Vue({
  render: h => h(App),
  router,// for router

}).$mount('#app')


import 'bootstrap/dist/js/bootstrap.bundle.js'