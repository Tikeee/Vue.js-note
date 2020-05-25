<!-- 1模板：html结构 -->
<template>
  <div id="home">
    <app-header v-on:titleChange="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:appusers="users"></users>
    <users v-bind:appusers="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<!-- 2行为：处理逻辑 -->
<script>
import HelloWorld from './HelloWorld'

//引入局部组件
import Users from './Users'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'home',
  data(){
    return{
      // title:"这是我的第一个Vue脚手架项目！"
      users:[
         // {name:"Henry",position:"Web开发",show:false},
         // {name:"Bucky",position:"Web开发",show:false},
         // {name:"Emily",position:"Web开发",show:false},
         // {name:"Henry",position:"Web开发",show:false},
         // {name:"Henry",position:"Web开发",show:false},
         // {name:"Bucky",position:"Web开发",show:false},
         // {name:"Emily",position:"Web开发",show:false}
       ],
       title:"传递的是一个值，（number string boolean）"
    }
  },
  methods:{
    updateTitle(titleC){
      this.title = titleC
    }
  },
  // 注册组件
  components:{
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  },
  created(){
  	this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
  		console.log(data)
  		this.users = data.body
  	})
  }
}
</script>

<!-- 3样式：解决样式 -->
<style scoped>
h1{
  color: purple;
}
</style>
