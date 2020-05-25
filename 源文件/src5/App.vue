<!-- 1模板：html结构 -->
<template>
  <div id="app">
    <HelloWorld></HelloWorld>
  </div>
</template>

<!-- 2行为：处理逻辑 -->
<script>

export default{
      name: 'App',
      created(){
        // fetch
        // fetch("/apis/test/testToken.php",{
        //   method:"post",
        //   headers:{
        //     "Content-type":"application/json",// 可不写
        //     token:"f4902c9ae5a2a9d8f84868ad064e706"
        //   },
        //   body:JSON.stringify({username:"henry",password:"123123"})
        // })
        // .then(result => {
        // // console.log(result)
        // return result.json()
        // })
        // .then(data => {
        //   console.log(data)
        //   // 返回请求不合法
        // })

        //axios
        this.$axios.post("/apis/test/testToken.php",{username:"hello",password:"123456"})
        .then(data => {
          console.log(data)
        })
      }
    }
</script>

<!-- 3样式：解决样式 -->
<style scoped>

</style>
