<template>
    <div class="container-center">
      <div class="card">
        <div class="basic_text" style="font-size: xx-large;">Welcome!</div>
        <div v-if="!this.isLoggedIn" class="basic_text" style="font-size: medium; padding-top: 10px;">Please login to see your informations or create an account to get started</div>
        <div v-if="this.isLoggedIn" class="basic_text" style="font-size: medium; padding-top: 10px;">Go to your list section to add tasks to your to-do list!</div>
      </div>
    </div>
  </template>
  
  <script>
  import "../styles/global_styles.css"
  
  import { getAuth, onAuthStateChanged } from "@firebase/auth";

  let auth;

  export default {
    data() {
      return {
        isLoggedIn: false,
      }
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
    },
  }
  </script>
  

  