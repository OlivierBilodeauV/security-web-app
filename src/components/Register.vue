<template>
    <div class="container-center">
      <div class="card">
        <div class="basic_text">Email :</div>
        <p><input type="text" placeholder="Email" v-model="email" required/></p>
        <div class="basic_text">Password :</div>
        <p><input type="password" placeholder="Password" v-model="password" required/></p>
        <div class="basic_text">Name :</div>
        <p><input type="text" placeholder="Name" v-model="name" required/></p>
        <p><button type="submit" @click="Register">Register</button></p>
        <div id="error" class="basic_text"></div>
      </div>
    </div>
</template>
  
 
 <script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { getAuth, createUserWithEmailAndPassword, updateProfile, browserSessionPersistence, setPersistence} from "firebase/auth"
  import Cookies from 'js-cookie'
  
  
  export default {
    name: "RegisterComponent",
   setup() {
      const email = ref('')
      const password = ref('')
      const name = ref('')
      let error = ref(null)
      const router = useRouter()
      const Register = async () => {
        if (name.value.length == 0) {
          document.getElementById('error').innerHTML = "*Name cannot be empty"
        }
        else if (/\d/.test(name.value)) {
          document.getElementById('error').innerHTML = "*Name cannot contain numbers"
        } 
        else 
        {
          setPersistence(getAuth(), browserSessionPersistence).then(async () => {
            const { user } = await createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            console.log(`User ${user.uid} created`)
            await updateProfile(user, {
              displayName: name.value
            });
            Cookies.set('Username', name.value, { expires: 7 });
          //this.$cookies.set("Name", name.value, "3h")
            console.log("User profile updated");
            router.push('/list');
          }).catch((error) => {
            switch (error.code) {
            case "auth/email-already-in-use":
              document.getElementById('error').innerHTML = "*There is already a user with this email"
              break;
            case "auth/invalid-email":
              document.getElementById('error').innerHTML = "*The email adress is invalid"
              break;
            case "auth/weak-password":
              document.getElementById('error').innerHTML = "*The password must be at least 6 characters long"
              break;
            default :
            document.getElementById('error').innerHTML = "*Missing password or email"
        }
          })
        }
    }
      return { Register, name, email, password, error }
    }
  };
</script>