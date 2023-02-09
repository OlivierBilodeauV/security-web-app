<template>
    <div class="row">
      <div class="container">
        <div class="card">
          <div class="basic_text" style="font-size: xx-large;">Hello {{ this.username }}!</div>
          <div class="basic_text" style="font-size: medium; padding-top: 10px;">Here is your to-do list</div>
          <form>
            <div class="column" style="padding-top: 20px;">
              <label class="basic_text">Name of item</label>
              <input v-model="item" required/>
              <p><button type="submit" @click="addToList">Add to list</button></p>
              <p><button type="button" @click="deleteList">Delete List</button></p>
            </div>
          </form>
        </div>
      </div>
      <div class="container-center">
        <div class="column">
        <div v-for="item in this.todo_items" :key="item.name" class="basic_text" style="padding-top: 10px;">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import "../styles/global_styles.css"
  import Cookies from 'js-cookie'
  import db from '../main.js'
  import { doc, setDoc, getDocs, query, collection, deleteDoc } from "firebase/firestore"
  import { ref } from "vue"
  

  export default {

    data() {
      return {
        username : "",
        itemName : "",
        item: ref(""),
        todo_items: []
      }
    },
    methods : {
      async addToList() {
        await setDoc(doc(db, 'todo', this.item), {
        name: this.item
      })
      this.item = "";
      this.todo_items = [];
      this.getItems();
    },
      async getItems() {
      // query to get all docs in 'countries' collection
      const querySnap = await getDocs(query(collection(db, 'todo')));

      // add each doc to 'countries' array
      querySnap.forEach((doc) => {
        this.todo_items.push(doc.data())
      })

    },
    async deleteList() {
      // query to get all docs in 'countries' collection
      const querySnap = await getDocs(query(collection(db, 'todo')));

      // add each doc to 'countries' array
      querySnap.forEach(async (document) => {
        await deleteDoc(doc(db, 'todo', document.data().name))
      })
      this.todo_items = [];
      this.getItems();

    }
    },
    mounted() {
      this.getItems();
      this.username = Cookies.get("Username");
    }
  }
  </script>
  