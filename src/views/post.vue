<template>
 <div>
    <Header v-bind:page="page"/>
    <div class="center">
    <form v-on:submit="submitPost"  >
        <input type="text" name="title" v-model="post.title"  placeholder="Post Title"  />
        <br/>
        <textarea  name="body" placeholder="Post body" v-model="post.body"  />
        <button type="submit">Post</button>
    </form>
    </div>
  </div>
</template>
<script>
import Header from "../components/header"
import { mapActions, mapGetters } from "vuex";

export default {
    name:"Post",
    components:{
      Header
    },
    computed: {
    ...mapGetters("home", ["post", "isLoading"])
    },
    data(){
        return {
            // post:{ title:null, body:null},
            page:"post"
        }
    },
    methods:{
         submitPost(e){
           e.preventDefault()
           if (this.post.title && this.post.title.length > 0 && this.post.body && this.post.body.length>0 ){
             let data={}
             data.title = this.post.title
             data.body = this.post.body
             console.log(data)
             if(this.post._id){
                data._id = this.post._id
                this.$store.dispatch('home/updatePost',data)
             }else{
                 this.$store.dispatch('home/createPost',data)
             }
            
             this.$router.push("/home")
           }
       }
    },
    mounted(){
      console.log( this.$route.query )
      if(this.$route.query && this.$route.query.id){
        this.$store.dispatch("home/getPost",this.$route.query.id)
      }
    }
    
}
</script>
<style scoped>
 .center {
  margin: auto;
  width: 50%;
  /* border: 3px solid green; */
  padding: 10px;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
textarea {
  width: 100%;
  height:300pt;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
button{
  background-color: #640000;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius:4px
}
</style>