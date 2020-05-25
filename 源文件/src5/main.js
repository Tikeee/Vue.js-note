// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import HelloWorld from './components/HelloWorld'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.headers.common['token'] = "f4902c9ae5a2a9d8f84868ad064e706"
axios.defaults.headers.post['Content-type'] = "application/json"

// 设为全局
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  //对应app.vue 的组件名 name: 'App',
  template: '<App/>'
})

//index.html -> main.js -> App.vue