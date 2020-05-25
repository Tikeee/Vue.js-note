<!-- 1模板：html结构 -->
<template>
  <div id="app">
  <ul>
    <!-- <li><a href="/">Home</a></li> -->
    <!-- <li><a href="/helloworld">Hello World!</a></li> -->
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/helloworld">Hello World!</router-link></li>
  </ul>
  <router-view></router-view>
  </div>
</template>

<!-- 2行为：处理逻辑 -->
<script>

export default {
  name: 'App',
  data(){
    return{
     
    }
  }
}
</script>

<!-- 3样式：解决样式 -->
<style scoped>

</style>
