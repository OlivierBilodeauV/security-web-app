import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAh0r2MB9RVe15T0Z5L4c5Yi1FWt6d_ofI",
    authDomain: "securitytp1.firebaseapp.com",
    projectId: "securitytp1",
    storageBucket: "securitytp1.appspot.com",
    messagingSenderId: "10005980161",
    appId: "1:10005980161:web:c5dfa37258cfe67a5ccc00",
    measurementId: "G-RCQ6L7N8RC"
  };

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);


app.mount('#app');
