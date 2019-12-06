import  * as service  from  "./service"

const state = {
    allBlogs: {},
    isLoading: false,
    post : {}
}

const getters = {
    allBlogs: (state) => {
        return state.allBlogs;
    },
    isLoading:(state)=>{
        return state.isLoading
    },
    post:(state)=>{
        return state.post
    }
}

const mutations = {
    // mutations are function to mutate the state

    onRequest(state) {
        state.isLoading = true;
    },
    updateSateData(state, data) {
        state.allBlogs = data
        state.isLoading = false
    },
    postSuccess(state,data){
        console.log("all post received")
        state.allBlogs = {...state.allBlogs,data}
        state.isLoading = false
        state.post={}
    },
    getPostSuccess(state,data){
        console.log("data received-->",data)
        state.post = data
        state.isLoading = false

    },
    deletePostSuccess(state,data){
        state.isLoading = false
    }
}

const actions = {
    
    // actions include async functions and api calls

    fetchBlogs({ commit }) {
        console.log("list")
        commit('onRequest')
           return service.fetchBlogs()
            .then(({ data }) => {
                commit("updateSateData", data);
            })
            .catch(error => {
                throw new Error(error);
            });
    },
    createPost({commit},data){
        commit('onRequest')
           return service.createPost(data)
            .then(({ data }) => {
                commit("postSuccess", data);
            })
            .catch(error => {
                throw new Error(error);
            });
    },
    getPost({commit},payload){
       commit('onRequest')
       return service.getPost(payload)
       .then(({data})=>{
           commit("getPostSuccess",data)
       })
       .catch(err=>{
           throw new Error(error)
       })
    },
    updatePost({commit},payload){
        commit('onRequest')
           return service.updatePost(payload)
            .then(({ data }) => {
                commit("postSuccess", data);
            })
            .catch(error => {
                throw new Error(error);
        });
    },
    deletePost({commit},payload){
        commit('onRequest')
        return service.deletePost(payload)
         .then(({ data }) => {
             commit("deletePostSuccess", data);
         })
         .catch(error => {
             throw new Error(error);
     });  
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}