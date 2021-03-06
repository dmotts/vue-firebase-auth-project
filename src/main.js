import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index'
import store from './store/index'
import auth from '@/auth'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate () {
    auth.init(this)
  },
  render: h => h(App)
}).$mount('#app')
