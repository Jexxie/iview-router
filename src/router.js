import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"

Vue.use(Router)

const ua = window.navigator.userAgent
let isMobile = false
if (ua.indexOf("iPhone") >= 0) isMobile = true
if (ua.indexOf("Android") >= 0) isMobile = true
if (ua.indexOf("iPad") >= 0) isMobile = true

const path = isMobile ? "/mobile" : ""

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      meta: {
        type: ""
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views" + path + "/Login.vue")
    },
    {
      path: "/admin",
      name: "admin",
      meta: {
        type: "login"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Admin.vue")
    }
  ]
})
