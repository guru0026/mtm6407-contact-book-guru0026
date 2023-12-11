<template>
  <div class="container-fluid d-flex">
    <h1>Contacts</h1>
    <button type="button" class="btn btn-success rounded-pill m-4 "><h2><strong>+ Add</strong></h2></button>
  </div>
    
    <ol class="container d-flex flex-wrap">
        <li class="card rounded-5 m-1 p-5 border border-0 bg-warning-subtle" v-for="contact in contacts" :key="contact.id">
          <router-link :to="`/details/${contact.id}`">
            <img src="/2.svg" alt="`${contact.id}`">
            <br>
            <h2><strong> {{ contact.name }} </strong></h2>
            <button type="button" class="btn btn-warning rounded-4 "><strong>Edit</strong></button>
            <button type="button" class="btn btn-danger rounded-4 m-1"><strong>Delete</strong></button>
          </router-link> 
        </li>
    </ol>
  
  
  </template>
  
  <script>
  
  export default {
    data: function() {
      return {
        contacts: [
            { 
              id: 1, 
              name: "Bryce", 
              lastname: "Doty", 
              email: "brycerdoty@armycam.com",
              phone: "(953) 758-5806",
              company: "Oranges Records & Tapes", 
            },
            { 
              id: 2, 
              name: "Harvey", 
              lastname: "Lacy", 
              email: "harveyelacy@rhyta.com",
              phone: "(909) 571-3595",
              company: "WWW Realty"
            },
            { 
              id: 3, 
              name: "Paul", 
              lastname: "Cartwright", 
              email: "paulccartwright@rhyta.com",
              phone: "(868) 379-4982",
              company: "Better Business Ideas and Services"
            },
            { 
              id: 4, 
              name: "Michael", 
              lastname: "Stull",
              email: "michaeltstull@dayrep.com",
              phone: "(801) 429-7540",
              company: "Coffey's Market" 
            },
            { 
              id: 5, 
              name: "Terrie", 
              lastname: "Couch", 
              genre: "terriercouch@rhyta.com",
              phone: "(735) 678-6389",
              company: "Muirhead's"  
            },
            { 
              id: 6, 
              name: "Susan", 
              lastname: "Young", 
              email: "susanjyoung@armycam.com",
              phone: "(541) 732-0520",
              company: "John M. Smyth's Homemakers"  
            },
            { 
              id: 7, 
              name: "Loretta", 
              lastname: "Reid",
              email: "lorettacreid@teleworm.us",
              phone: "(364) 974-5336",
              company: "Total Serve"  
            },
            { 
              id: 8, 
              name: "Diane", 
              lastname: "Cardwell", 
              email: "dianewcardwell@dayrep.com",
              phone: "(435) 412-1485",
              company: "E-zhe Source"  
            },
            { 
              id: 9, 
              name: "Ernest", 
              lastname: "Clark", 
              email: "ernestwclark@dayrep.com",
              phone: "(453) 436-2352",
              company: "National Auto Parts"  
            },
            { 
              id: 10, 
              name: "Nichole",
              lastname: "Mercer", 
              email: "nicholebmercer@dayrep.com",
              phone: "(680) 572-8273",
              company: "Record World"  
            }
        ]
      }
    },
  
    // computed: {
    //   action: function(){
    //     return this.contacts.filter( contact => contact.genre === "Action" )
    //   },
    //   scifi: function(){
    //     return this.contacts.filter( contact => contact.genre === "Science Fiction" )
    //   },
    // },
    created(){
      const storeItems = localStorage.getItem('items')
      if (storeItems){
        this.contacts = JSON.parse(storeItems)
      } else {
        localStorage.setItem('items', JSON.stringify(this.contacts))
      }
    }
  }
  
  
  </script>