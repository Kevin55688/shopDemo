import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import axios from 'axios';
Vue.use(axios)

Vue.config.productionTip = false

new Vue({
data:{
  num : 123
},



  router,
  render: h => h(App)
}).$mount('#app')
