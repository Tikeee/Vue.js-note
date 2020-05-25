<template>
	<div class="users">
		<h1>Users</h1>

		<!-- 添加用户信息 -->
		<form v-on:submit="addUser">
			<input type="text" v-model="newUser.name" placeholder="Enter name">
			<input type="text" v-model="newUser.email" placeholder="Enter email">
			<input type="submit" value="Submit">
		</form>
		<!-- 展示用户信息 -->
		<ul>
			<li v-for="user in users">
				<input type="checkbox" class="toggle" v-model="user.contacted">
				<span :class="{contacted:user.contacted}">
					{{user.name}} : {{user.email}}
					<button v-on:click="removeUser(user)">X</button>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "users",
		data(){
			return {
				newUser:{},
				users:[
					{
						name:"Tikee",
						email:"Tikee@Tikee.com",
						contacted:false
					},
					{
						name:"Tikee L",
						email:"Tikee@Tikee.com",
						contacted:false
					},
					{
						name:"Tikee Li",
						email:"Tikee@Tikee.com",
						contacted:false
					},
				]
			}
		},
		methods:{
			addUser:function(e){
				// console.log("Hello");
				this.users.push({
					name:this.newUser.name,
					email:this.newUser.email,
					contacted:false
				});
				e.preventDefault() //防止点击按钮刷新
			},
			removeUser:function(user){
				// console.log("HHello")
				this.users.splice(this.users.indexOf(user),1)
			}

		},
		created:function(){
			// console.log("Hello U")
			this.$http.get("https://jsonplaceholder.typicode.com/users")
				.then(function(res){
					// console.log(res)
					this.users = res.data
				})
		}
	}
</script>

<style scoped>
	.contacted{
		text-decoration: line-through;
	}
</style>