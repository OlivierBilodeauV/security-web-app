<template>
    <div class="container-center">
      <div class="card">
        <div class="basic_text" style="font-size: xx-large;">Hello {{ this.username }}!</div>
        <div class="basic_text" style="font-size: medium; padding-top: 10px;">Here is your to-do list</div>
      </div>
    </div>
  </template>
  
  <script>
  import "../styles/global_styles.css"
  import Cookies from 'js-cookie'
  

  export default {

    data() {
      return {
        username : "",

      }
    },
    mounted() {
      
      this.username = Cookies.get("Username");
    }
  }
  </script>
  