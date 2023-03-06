<template>
  <div class="container-center">
    <div class="card">
      <div class="basic_text">Email :</div>
      <p><input type="text" placeholder="Email" v-model="email" /></p>
      <div class="basic_text">Password :</div>
      <p><input type="password" placeholder="Password" v-model="password" /></p>
      <p><button @click="Login">Login</button></p>
      <div id="error" class="basic_text"></div>
      <label class="honeypot" for="name"></label>
      <input class="honeypot" autocomplete="off" type="text" id="name" name="name" placeholder="Your name here" v-model="honeypot">
    </div>
  </div>
</template>


<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword, browserSessionPersistence, setPersistence } from "firebase/auth"
import Cookies from 'js-cookie'

export default {
  name: "RegisterComponent",
 setup() {
    const email = ref('')
    const password = ref('')
    const error = ""
    const router = useRouter()
    const honeypot = ref('')
    const Login = async () => {
      if(honeypot.value == '')
      {
        setPersistence(getAuth(), browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
          console.log("Login successful");
          Cookies.set('Username', getAuth().currentUser.displayName, { expires: 7 });
          router.push('/list');
        })
      })
        .catch((error) => {
          switch (error.code) {
            default:
              document.getElementById('error').innerHTML = "*Invalid email or password"
              break;
          }
        })}
        else{
          alert("Bot detected");
        }
    }

    return { Login, name,email, password, error }
  }
  
};
</script>

<style>
    .honeypot{
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 0;
        width: 0;
        z-index: -1;
    }
</style>