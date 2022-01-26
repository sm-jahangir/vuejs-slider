import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'

// Router
import router from "./router";

new Vue({
  render: h => h(App),
  router,// for router

}).$mount('#app')


import 'bootstrap/dist/js/bootstrap.bundle.js'