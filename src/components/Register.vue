<template>
    <div class="container-center">
      <div class="card">
        <div class="basic_text">Email :</div>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <div class="basic_text">Password :</div>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <div class="basic_text">Name :</div>
        <p><input type="text" placeholder="Name" v-model="name" /></p>
        <p v-if="errorMsg">{{ errorMsg }}</p>
        <p><button @click="Register">Register</button></p>
      </div>
    </div>
</template>
  
 
 <script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
  import Cookies from 'js-cookie'

  export default {
    name: "RegisterComponent",
   setup() {
      const email = ref('')
      const password = ref('')
      const name = ref('')
      let errorMsg = ref('')
      const error = ref(null)
      const router = useRouter()
      const Register = async () => {
        try {
          if (name.value.length == 0) {
        alert("name cannot be empty");
        } else {
        const { user } = await createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        console.log(`User ${user.uid} created`)
        await updateProfile(user, {
          displayName: name.value
        });
        Cookies.set('Username', name.value, { expires: 7 });
        //this.$cookies.set("Name", name.value, "3h")
        console.log("User profile updated");
        router.push('/profile');
        }
      }
      catch (error){
        errorMsg = error.message
        //alert(error.code);
        switch (error.code) {
            case "auth/email-already-in-use":
              errorMsg = "There is already a user with this email";
              alert(errorMsg);
              break;
            default:
              errorMsg = "Invalid email or password";
              break;
        }}
        
    }
      return { Register, name,email, password, error }
    }
  };
</script>