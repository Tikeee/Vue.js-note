<!-- 1模板：html结构 -->
<template>
  <div id="app">
    <h1>{{title}}</h1>
    <app-header></app-header>
    <users></users>
    <app-footer></app-footer>
  </div>
</template>

<!-- 2行为：处理逻辑 -->
<script>
import HelloWorld from './components/HelloWorld'

//引入局部组件
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data(){
    return{
      title:"这是我的第一个Vue脚手架项目！"
    }
  },
  // 注册组件
  components:{
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  }
}
</script>

<!-- 3样式：解决样式 -->
<style scoped>
h1{
  color: purple;
}
</style>
