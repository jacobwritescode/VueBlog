<template>
  <div>
    <Header v-bind:page="page" />
    <div>
      <p v-if="isLoading == true">Loading.....fetching data from api</p>
      <div>
        <hr />
        <ul class="post" v-for="(post,index) in allBlogs" v-bind:key="index">
          <li>
            <h3>{{post.title}}</h3>
            <span>Author:{{post.author}}</span>
            <p>{{post.body}}</p>
            votes:{{post.meta.votes}}
            fav:{{post.meta.favs}}
            <br />
            <button v-if="post.author==user.name" v-on:click="goToWritePage(post._id)">Edit</button>
            <button v-if="post.author==user.name" v-on:click="deletePost(post._id)">Delete</button>
            <br/>
            <b>Comments:</b>
            <div class="comment" v-for="(comment,index) in post.comments" v-bind:key="index">
              <hr />
              <i>{{comment.commentedBy}}</i>
              <p class="p-comment">{{comment.body}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Header from "../components/header";

export default {
  name: "Home",
  components: {
    Header
  },
  computed: {
    ...mapGetters("home", ["allBlogs", "isLoading"]),
    ...mapGetters("user", ["user", "isLoading"])
  },
  data() {
    return {
      page: "home"
    };
  },
  methods: {
    async fetchData() {
      console.log("fetchdata in home component");
      await this.fetchBlogs();
    },
    ...mapActions("home", ["fetchBlogs"]),
    signup() {
      this.$router.push("/signup");
    },
    logout() {
      this.$store.dispatch("user/logOut");
      this.$router.push("/login");
    },
    goToWritePage(postId) {
      // this.$router.push("/post");
      this.$router.push({ path: "post", query: { id: postId } });
    },
    async deletePost(postId) {
      this.$store.dispatch("home/deletePost", postId);
      await this.fetchData()
    }
  },
  mounted() {
    console.log("mounted called--------->");
    this.fetchData();
  }
};
</script>
<style scoped>
.post {
  list-style: none;
  /* display: block; */
  /* background-color: rgb(221, 112, 112); */
  border-radius: 5pt;
  padding: 5pt;
  margin: 2pt;
  width: 98%;
}
li {
  background-color: white;
  padding: 14px;
  border-radius: 10px;
  width: 65%;
}
h3 {
  font-family: monospace;
}
p {
  display: block;
  background-color: blanchedalmond;
  padding: 20px;
}
span {
  font-style: oblique;
}
.comment {
  background-color: white;
  width: 40%;
}
.p-comment {
  display: block;
  padding: 5px;
  background-color: whitesmoke;
}
</style>