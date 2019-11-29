<template>
  <div>
      <div id="login-container">
       <LoginForm :handleLogin="handleLogin"/>
      </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import LoginForm from "../components/loginForm" 



export default {
  name: "Login",
  components:{
   LoginForm   
  },
  computed: {
    ...mapGetters('user',["user", "isLoading"])
  },
  methods :{
    async handleLogin(data){
      // console.log("data to module-->",data)
      await this.$store.dispatch('user/userLogin',data)
      if(this.user){
      await this.$router.push("/home")
     }
    }
    // ...mapActions(["userLogin"]),
  },
  mounted(){
    console.log("mounted",this.user)
    
    
  } 
};
</script>
<style scoped>
 #login-container{
   position: absolute;;
    top: 50%;
    left: 50%;
    width:30em;
    /* height:18em; */
    margin-top: -9em;
    margin-left: -15em;
    border: 1px solid #ccc;
    background-color: #f3f3f3;
 }
</style>