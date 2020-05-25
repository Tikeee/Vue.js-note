// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Users from './components/Users'
import Test from './components/Test'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

// 设置路由
const router = new VueRouter({
	mode:'history',// 去掉 # 号
	base:__dirname,
	routes:[
		{path:"/",component:Users},
		{path:"/test",component:Test}
	]
})
/* eslint-disable no-new */
new Vue({
	router,
  // el: '#app', // 写成 .$mount("#app")
  // template: '<App/>'
  template: `
  	<div id="app">
  		<ul>
  			<li>
  				<router-link to="/">Users</router-link>
  				<router-link to="/test">Test</router-link>
  			</li>
  			<router-view></router-view>
  		</ul>
  	</div>
  `
}).$mount("#app")
