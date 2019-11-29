import  * as service  from  "./service"

const state = {
    allBlogs: {},
    isLoading: false
}

const getters = {
    allBlogs: (state) => {
        return state.allBlogs;
    },
    isLoading:(state)=>{
        return state.isLoading
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
    }
}

const actions = {
    
    // actions include async functions and api calls

    fetchBlogs({ commit }) {
        commit('onRequest')
           return service.fetchBlogs()
            .then(({ data }) => {
                commit("updateSateData", data);
            })
            .catch(error => {
                throw new Error(error);
            });
    },
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}