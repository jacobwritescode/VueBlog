<template>
  <ul>
    <li>
      <div>
          <router-link to="/home" >DashOff</router-link>
     </div>
    </li>
    <li>
      <div>
          <router-link to="/post" >Write</router-link>
     </div>
    </li>
    <li>
      <div>Profile</div>
    </li>
    <li class="li-right">
      <div v-on:click="logout">Sign out</div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "Header",
  props: {
    page: String
  },
  methods: {
    logout() {
      this.$store.dispatch("user/logOut");
      this.$router.push("/login");
    },
    goToWritePage() {
      this.$router.push("/post");
    },
    goToHome() {
      this.$router.push("/home");
    }
  }
};
</script>
<style scoped>
.navbar {
  background-color: rgb(155, 0, 26);
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  width: 100%;
}
h2 {
  color: rgb(243, 243, 243);
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(155, 0, 26);
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  position: sticky;
  position: -webkit-sticky;
}
li {
  float: left;
}
.li-right {
  float: right;
}
li div {
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
}
li div a {
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
li:hover {
  background-color: rgb(61, 2, 12);
}
</style>