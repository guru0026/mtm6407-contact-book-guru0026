<template>
    <div>
        <div class="container d-flex">
            <h1>Create Contact</h1>
            <span @click="updateItem"><button type="button" class="btn btn-success rounded-pill m-4 "><h2><strong>Save</strong></h2></button></span>
            <span>
                <button type="button" class="btn btn-dark rounded-pill m-4 ">
                    <router-link :to="`/`">
                        <h2>
                            <strong>Back</strong>
                        </h2>   
                    </router-link>
                </button>
            </span>
            
        </div>
        <div class="card rounded-5 m-1 p-5 border border-0 bg-success-subtle">
            <form @submit.prevent="updateItem">
                <label for="name">First Name:</label>
                <input type="text" id="name" v-model="contact.name">
            </form>
            <form @submit.prevent="updateItem">
                <label for="name">Last Name:</label>
                <input type="text" id="name" v-model="contact.lastname">
            </form>
            <form @submit.prevent="updateItem">
                <label for="name">e-Mail:</label>
                <input type="text" id="name" v-model="contact.email">
            </form>
            <form @submit.prevent="updateItem">
                <label for="name">Phone:</label>
                <input type="text" id="name" v-model="contact.phone">
            </form>
            <form @submit.prevent="updateItem">
                <label for="name">Company:</label>
                <input type="text" id="name" v-model="contact.company">
            </form>

        </div>

        <h2>
            
            
        </h2>
    </div>
</template>

<script>

export default {

    data: ()=>({
        contact: {
          id:'',
          name:'',
          lastname:'',
          email:'',
          phone: '',
          company:'',  

        }
    }),
    created(){

    },
    methods: {
            updateItem: function() {
                let savedContacts = JSON.parse(localStorage.getItem('items'))||[];
                let id = Math.floor(10000 * Math.random() + 20).toString()
                this.contact.id = id;
                savedContacts.push(this.contact);
                localStorage.setItem('items', JSON.stringify(savedContacts))
                this.$router.push("/")
            }
        },
}
</script>