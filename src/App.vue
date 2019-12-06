<template>
  <div id="app">
     <!-- <div class="header">
        <h2>Scroll Down</h2>
        <p>Scroll down to see the sticky effect.</p>
      </div> -->
   <Header/>
   <router-view></router-view>  
  </div>
</template>

<script>
export default {
  name: 'app',
  // components:{
  //   Header,
  // }
}
</script>

<style>
body{
  background-color: rgb(212, 161, 170);
  padding:0pt;
  margin: 0pt;
}


</style>
