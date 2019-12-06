<template>
  <form>
    <div class="container">
      <label for="email">
        <b>Email</b>
      </label>
      <input type="text" placeholder="Enter Username" v-model="userdata.email" name="email" required />

      <label for="psw">
        <b>Password</b>
      </label>
      <input type="password" placeholder="Enter Password" v-model="userdata.password" name="psw" required />

      <button type="submit" v-on:click="login" >Login</button>
    </div>
     <p><router-link to="/signup" >Create an account</router-link></p>
    <div class="container">
      <button type="button" class="cancelbtn" v-on:click="reset" >Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  props:{
     handleLogin:Function
  },
  data(){
    return {
      userdata :{
          email: '',
          password:''
      } 
    }
  },
  methods:{
    login(ev){
        ev.preventDefault()
        let data = {email:this.userdata.email, password : this.userdata.password}
        // console.log(data)
        this.handleLogin(data)
        this.reset()
      },
      reset(){
        this.userdata = {email:null,password:null}
      },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
