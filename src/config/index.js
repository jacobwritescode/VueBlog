// console.log(process.env.VUE_APP_SECRET)

const serverPath = {
    //api server
    development: "http://localhost:4500/",
    staging: "",
    production: "",
  }
  const server = serverPath[process.env.VUE_APP_SECRET || "development"]
  console.log("server : ", server);
  let all = {
    routes: {
        login:"/user/login",
        signup:"/user/register",
        blogs:"/post/list",
        create:"/post/create",
        post:"/post"
    },
  };
  
  let env = {
    development: {
      api:server+"api",
      cookies: {
        name: 'VueBlog',
        expiry: 7,
        domain: "localhost"
      },
    },
    staging: {
      api:server+"/v3",
      cookies: {
        name: '',
        expiry: 7,
        domain: ""
      },
    },
    production: {
      api:server+"/v3",
      cookies: {
        name: '',
        expiry: 7,
        domain: ""
      },
    }
  };
  
  export default {
    ...all,
    ...env[process.env.VUE_APP_SECRET || "development"]
  };
  