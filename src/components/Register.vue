<template>
    <div class="container-center">
      <div class="card">
        <div class="basic_text">Email :</div>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <div class="basic_text">Password :</div>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <div class="basic_text">Name :</div>
        <p><input type="text" placeholder="Name" v-model="name" /></p>
        <p><button @click="Register">Register</button></p>
      </div>
    </div>
</template>
  

 <script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
  
  export default {
    name: "RegisterComponent",
   setup() {
      const email = ref('')
      const password = ref('')
      const name = ref('')
      const error = ref(null)
      const router = useRouter()
      const Register = async () => {
        if (name.value.length == 0) {
        alert("name cannot be empty");
        } else {
        const { user } = await createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        console.log(`User ${user.uid} created`)
        await updateProfile(user, {
          displayName: name.value
        });
       
        this.$cookie.set("Name", name.value)
        console.log("User profile updated");
        router.push('/profile');
      }
    }
          /* createUserWithEmailAndPassword(getAuth(), email.value, password.value)
          .then(()=>{
            await updateProfile(user, {
              displayName: name
            });
            console.log("Registration successful");
            
          })
          .catch((error) => {
            console.log(error.code);
            alert(error.message);
          }) */ 
  
      return { Register, name,email, password, error }
    }
  };
</script>