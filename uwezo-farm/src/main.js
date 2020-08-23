import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as firebase from 'firebase'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import  './../main.css'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const firebaseConfig = {
  apiKey: "AIzaSyBbHQrhuH5I_AYUSScDpGheCzE-7nTKu3U",
  authDomain: "uwezofarm-f00a2.firebaseapp.com",
  databaseURL: "https://uwezofarm-f00a2.firebaseio.com",
  projectId: "uwezofarm-f00a2",
  storageBucket: "uwezofarm-f00a2.appspot.com",
  messagingSenderId: "829124965247",
  appId: "1:829124965247:web:25ee573c3e2ab5d07ee04a",
  measurementId: "G-Z0ZQT0LCY4"
}

firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebase = firebase;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
