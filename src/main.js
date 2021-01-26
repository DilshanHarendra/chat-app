import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css';
import store from './store/index'
import VueSocketIO from 'vue-socket.io';

Vue.use(new VueSocketIO({
  debug: true,
  connection: '/',
  transports: ['websocket', 'xhr-polling', 'jsonp-polling']
}))
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),

}).$mount('#app')




