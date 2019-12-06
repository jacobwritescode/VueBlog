import Vue from "vue"
import Router from "vue-router";
import { getJsonCookies } from "../helpers/utility"

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            name:"",
            path:"/",
            component:()=>import ("@/views/login"),
            meta: { 
                guest: true
            }
        },
        {
            name:"Home",
            path:"/home",
            component:()=>import ("@/views/home"),
            meta: { 
                requiresAuth: true
            }
           
        },
        {
            name:"About",
            path:"/about",
            component:() => import("@/views/about"),
            meta: { 
                requiresAuth: true
            }
        },
        {
            name:"Post",
            path:"/post",
            component:() => import("@/views/post"),
            meta: { 
                requiresAuth: true
            }
        },
        {
            name:"Signup",
            path:"/signup",
            component:()=>import ("@/views/signup"),
            meta: { 
                guest: true
            }
        },
        {
            name:"login",
            path:"/login",
            component:()=>import ("@/views/login"),
            meta: { 
                guest: true
            }
        },
     ]
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (!getJsonCookies()) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            console.log("HAS TOKEN")
            // let user = JSON.parse(localStorage.getItem('user'))
            // if(to.matched.some(record => record.meta.is_admin)) {
            //     if(user.is_admin == 1){
            //         next()
            //     }
            //     else{
                    next()
                // }
            // }else {
            //     next()
            // }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(!getJsonCookies()){
            next()
        }
        else{
            console.log("has token so sending to home")
            next({ name: 'Home'})
        }
    }else {
        next() 
    }
})

export default router