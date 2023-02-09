import * as VueRouter from 'vue-router';
import Home from "../components/Home.vue"
import About from "../components/About.vue"
import Login from "../components/Login.vue"
import Register from "../components/Register.vue"
import List from "../components/List.vue"
import {getAuth, onAuthStateChanged} from "firebase/auth"

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login},
    { path: '/register', component: Register},
    { path: '/list', component: List, meta:{
      requiresAuth: true,
    }}
  ]

  const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const removeListener = onAuthStateChanged(getAuth(),
        (user) => {
          removeListener();
          resolve(user);
        },
        reject
      )
    })
  }

  router.beforeEach(async(to, from, next) => {
    if(to.matched.some((record) => record.meta.requiresAuth)){
      if(await getCurrentUser()){
        next();
      } else {
        alert("You don't have access")
        next("/");
      }
    }
    else{
      next();
    }
  });

export default router