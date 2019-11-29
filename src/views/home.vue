<template>
  <div>
    <!-- <SampleComponent /> -->
    <div>
      <h2>Happy to see you again.........</h2>
      <button v-on:click="fetchBlogs">Get Blogs</button>
      <button v-on:click="logout">Logout</button>
      <p v-if="isLoading == true">Loading.....fetching data from api</p>
      <div>
        <hr />
        <ul v-for="(post,index) in allBlogs" v-bind:key="index">
          <li>
                <h3>{{post.title}}</h3>
                <span>by:{{post.author}}</span>
                <p>{{post.body}}</p>
            
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    // SampleComponent
  },
  computed: {
    ...mapGetters("home", ["allBlogs", "isLoading"])
  },
  methods: {
    fetchData() {
      console.log("fetchdata in home component");
      this.$store.dispatch("fetchData");
    },
    ...mapActions("home", ["fetchBlogs"]),
    signup() {
      this.$router.push("/signup");
    },
    logout() {
      this.$store.dispatch("user/logOut");
      this.$router.push("/login");
    }
  },
  created() {
    // this.fetchData()
  }
};
</script>