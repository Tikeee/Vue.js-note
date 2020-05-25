

//组件 es6 ``[可换行]
Vue.component("greeting",{
	template:`
	<p>
		{{name}}:大家好，给大家介绍一下。。。
		<button @click="changeName">改变名字</button>
	</p>
	`,
	data:function(){
		return {
			name:"Tikee"
		}
	},
	methods:{
		changeName:function(){
			this.name = "Henry"
		}
	}
})

//实例化vue对象
new Vue({
	el: "#vue-app-one",
});

//实例化vue对象2
new Vue({
	el: "#vue-app-two",
});
