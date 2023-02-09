<template>
  <div class="container-center">
    <div class="card">
      <div class="basic_text">Email :</div>
      <p><input type="text" placeholder="Email" v-model="email" /></p>
      <div class="basic_text">Password :</div>
      <p><input type="password" placeholder="Password" v-model="password" /></p>
      <p><button @click="Login">Login</button></p>
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
    const Login = async () => {
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
            case "auth/invalid-email":
              alert("Invalid email or password");
              break;
            case "auth/user-not-found":
              alert("Invalid email or password");
              break;
            case "auth/wrong-password":
              alert("Invalid email or password");
              break;
            default:
              alert("Invalid email or password");
              break;

          }
        })  
    }

    return { Login, name,email, password, error }
  }
};
</script>