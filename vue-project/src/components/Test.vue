<template>
	<div class="test">
		<!-- 获取数据 -->
		<h1>{{title}}</h1>
		<p>{{user.firstName}}</p>
		<p v-text="user.lastName"></p>

		<!-- v-if 判断 -->
		<p v-if="show">{{user.firstName}}</p>
		<!-- v-else -->
		<p v-else="show">Nobody</p>

		<!-- v-for 循环 -->
		<ul>
			<li v-for="item in items">{{item.title}}</li>
		</ul>

		<!-- v-on 点击事件 -->
		<button v-on:click="greet('Hello Everybody!')">Say Greeting</button>

		<!-- 键盘事件 v-on:keyup.alt.enter 同时按下alt+enter -->
		<input type="text" v-on:keyup="pressKey" v-on:keyup.alt.enter="enterHit">

		<hr>
		<!-- computed 计算属性 -->
		<label>FirstName:</label>
		<input type="text" v-model="user.firstName">
		<br>
		<label>lastName:</label>
		<input type="text" v-model="user.lastName">
		<br>

		<h3>{{fullName}}</h3>

		<!-- props 属性 -->
		<h2>{{msg}}</h2>
	</div>
</template>

<script>
	export default {
		name: "test",
		props:{
			msg:{
				type:String,
				default:"默认文字"
			}
		},
		data(){
			return {
				title:"Hello My Vue-project!",
				user:{
					firstName:"Tikee",
					lastName:"Li"
				},
				show:true,
				items:[
					{title:"item 1"},
					{title:"item 2"},
					{title:"item 3"},
				]
			}
		},
		methods:{
			greet:function(event){
				alert(event);
			},
			pressKey:function(){
				console.log("Pressed...")
			},
			enterHit:function(){
				console.log("You Pressed EnterKey")
			}
		},
		computed:{
			fullName:function(){
				return this.user.firstName + " " + this.user.lastName;
			}
		}
	}
</script>

<style scoped>
	
</style>