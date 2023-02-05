<template>
  <div>
    <ul>
      <li><a href="#/">Home</a></li>
      <li v-if="this.isLoggedIn"><a href="#profile">Profile</a></li>
      <li ><a href="#about">About</a></li>
      <div class="row_end">
        <li v-if="!this.isLoggedIn"><a href="#register">Sign Up</a></li>
        <li style="padding-right: 10px" v-if="!this.isLoggedIn"><a href="#login">Login</a></li>
        <li style="padding-right: 10px" v-if="this.isLoggedIn"><a @click="signOutTrigger">SignOut</a></li>
        <div class="row_end" style="padding-right: 10px;padding-top: 10px">
          <input
              @change="toggleTheme"
              id="checkbox"
              type="checkbox"
              class="switch-checkbox"
            />
          <label for="checkbox" class="switch-label">
            <div
                class="switch-toggle"
                :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
              >
            </div>
          </label>
        </div>
    </div>
  </ul>
    <router-view/>
  </div>
</template>

<script>

import "./styles/global_styles.css"
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import router from "./router";
import Cookies from 'js-cookie'


let auth;

  export default {
    name: 'App',
    components: {
      
    },
    mounted() {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if(user) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      });
      const initUserTheme = this.getTheme();
      this.setTheme(initUserTheme);
    },
    data() {
      return {
        userTheme: "light-theme",
        isLoggedIn: false,
      };
    },
    methods: {
      signOutTrigger() {
        signOut(auth).then(()=>{
          Cookies.remove("Username")
          router.push("/");
        });
      },
      setTheme(theme) {
        localStorage.setItem("user-theme", theme);
        this.userTheme = theme;
        document.documentElement.className = theme;
      },
      toggleTheme() {
        const activeTheme = localStorage.getItem("user-theme");
        if (activeTheme === "light-theme") {
          this.setTheme("dark-theme");
        } else {
          this.setTheme("light-theme");
        }
      },
      getMediaPreference() {
        const hasDarkPreference = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (hasDarkPreference) {
          return "dark-theme";
        } else {
          return "light-theme";
        }
      },
      getTheme() {
        return localStorage.getItem("user-theme");
      },
    }
  }
</script>
<style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  
  li {
    float: left;
  }
  
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  li a:hover:not(.active) {
    background-color: #111;
  }
  
  .active {
    background-color: #04AA6D;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style>


