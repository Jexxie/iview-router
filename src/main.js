import Vue from "vue"
import App from "./App.vue"
import "./plugins/iview.js"
import router from "./router"

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const type = to.meta.type

  if (type === "login") {
    if (window.localStorage.getItem("login")) {
      next()
    } else {
      next("/login")
    }
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
