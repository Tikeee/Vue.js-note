// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Users from './components/Users'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'

Vue.config.productionTip = false

//全局
Vue.use(VueRouter)
Vue.use(VueResource)

//配置路由：
const router = new VueRouter({
	routes:[
		{path:"/",component:Home},
		{path:"/helloworld",component:HelloWorld},
	],
	//去掉 # 号
	mode:"history"
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  //对应app.vue 的组件名 name: 'App',
  template: '<App/>'
})

//index.html -> main.js -> App.vue