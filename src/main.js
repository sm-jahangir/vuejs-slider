import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Router
import router from "./router";

new Vue({
  render: h => h(App),
  router,// for router

}).$mount('#app')
