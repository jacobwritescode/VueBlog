<template>
    <div id="signup-container">
      <SignupForm :handleSignup="handleSignup" />
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import SignupForm from "../components/signupForm";
export default {
  name: "Signup",
  components: {
    SignupForm
  },
  computed: {
    ...mapGetters('user',["user", "isLoading"])
  },
  methods :{
    async handleSignup(data){
      // console.log("data to module-->",data)
      await this.$store.dispatch('user/userSignup',data)
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
 #signup-container{
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