<template>
    <div>
        <div class="container d-flex">
            <h1>Contact Details</h1>
            <span @click="updateItem"><button type="button" class="btn btn-dark rounded-pill m-4 "><h2><strong>Save</strong></h2></button></span>
            <span>
            <button type="button" class="btn btn-dark rounded-pill m-4 ">
                <router-link :to="`/details/${contact.id}`">
                    <h2>
                        <strong>Back</strong>
                    </h2>   
                </router-link>
            </button>
        </span>
        </div>
       
        <div class="card rounded-5 m-1 p-5 border border-0 bg-warning-subtle">
            <h2>
            <strong>{{ contact.name }}</strong>
            </h2>

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
    props:['id'],
    data(){
        return{
            status:'',
            contact: '',
            contacts: ''
        }
    },
    created(){
        this.contacts = JSON.parse(localStorage.getItem('items'))
        if (this.contacts){
            this.contact = this.contacts.find( item => item.id == this.id)
        }
    },
    methods: {
            updateItem: function() {
                localStorage.setItem('items', JSON.stringify( this.contacts.map(contact => contact.id == this.id ? {...this.contact} : contact) ) )
                this.status = "Contact updated..."
                this.$router.push('/')
            }
        },
}
</script>