<template>

  <div class="container-fluid d-flex">
    <h1>Contacts</h1>
    <button type="button" class="btn btn-dark rounded-pill m-4 ">
      <router-link :to="`/add`">
        <h2><strong>+ Add</strong></h2>
      </router-link>
    </button>
  </div>
    <input class="bg-primary-subtle" type="text" placeholder="search" v-model="search" @input="filterContatcs">
    <ol class="container-fluid d-flex flex-wrap">
        <li class="card rounded-5 m-1 p-5 border border-0 bg-light" id="contact-card" v-for="contact in filteredContatcs" :key="contact.id">
          
            <img src="/2.svg" alt="`${contact.id}`">
            <br>
            <h2 class="card-title">
                <strong> {{ contact.name }} </strong>
            </h2>  
            <h3>
              {{ contact.lastname }}
            </h3>
            <button type="button" class="btn btn-dark rounded-pill ">
              <router-link :to="`/details/${contact.id}`">
                <strong>Detail</strong>
              </router-link>
            </button>
            <button type="button" class="btn btn-outline-danger rounded-pill m-1" @click="deleteContact(contact.id)"><strong>Delete</strong></button>
        </li>
    </ol>
  
  
  </template>
  
  <script>

import dbContacts from '../data/contacts.js'
  
  export default {
    data: function() {
      return {
        contacts : [{
          id:'',
          name:'',
          lastname:'',
          email:'',
          phone: '',
          company:'',  

        }],
        search:'',
        filteredContatcs: [],
      }
    },
  
    methods:{
      deleteContact: function(id){
        let savedContacts = JSON.parse(localStorage.getItem('items')) || [];
        let updatedContacts = savedContacts.filter(contact=>{return contact.id != id})
        localStorage.setItem('items', JSON.stringify(updatedContacts))
        this.contacts = JSON.parse(localStorage.getItem('items'))
        this.filteredContatcs =  JSON.parse(localStorage.getItem('items'));
        this.filterContatcs()
      },

      filterContatcs(){
        this.filteredContatcs = this.contacts.filter((contact) => {
          let name = (contact.name + contact.lastname)
         return name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },

    created(){
      let tempContacts =  JSON.parse(localStorage.getItem('items')) || dbContacts
      this.contacts = tempContacts.sort(function(a, b) {
        return a.name.localeCompare(b.name);
      });
      localStorage.setItem('items',  JSON.stringify(this.contacts))
      this.filteredContatcs = this.contacts
    }
  }
  
  
  </script>