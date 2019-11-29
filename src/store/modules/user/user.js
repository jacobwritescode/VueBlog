import * as service from "./service"
import { setCookies,getCookie, clearCookies } from "../../../helpers/utility"

const state = {
    isLoading :false,
    user : getCookie() || {}
}

const getters = {
    user: (state) => {
        return state.user;
    },
    isLoading:(state)=>{
        return state.isLoading
    }
}

const mutations = {
    onRequest(state) {
        state.isLoading = true;
    },
    userLoginSuccess(state, data) {
        setCookies(data)
        state.isLoading = false
    },
    logOut(state,data){
        clearCookies()
        state.isLoading = false
    }
}

const actions ={
    async userLogin({ commit },payload) {
        console.log("data received at action",payload)
        commit('onRequest')
           return await service.userLogin(payload)
            .then(({data}) => {
                commit("userLoginSuccess", data);
            })
            .catch(error => {
                throw new Error(error);
            });
    },
    async userSignup({ commit },payload) {
        console.log("data received at action",payload)
        commit('onRequest')
           return await service.userSignup(payload)
            .then(({data}) => {
                commit("userLoginSuccess", data);
            })
            .catch(error => {
                throw new Error(error);
            });
    },
    async logOut({commit}){
        commit('onRequest')
        commit('logOut')
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}