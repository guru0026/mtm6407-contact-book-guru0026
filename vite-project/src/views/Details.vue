<template>
    <div>
        
        <div class="container d-flex">
            
            <h1>Contact Details</h1>

            <button type="button" class="btn btn-dark rounded-pill m-4 ">
                <router-link :to="`/edit/${contact.id}`">
                    <h2>
                        <strong>Edit</strong>
                    </h2>   
              </router-link>
            </button>
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
            <h2>
            <strong>{{ contact.name }}</strong>
            </h2>

            <form @submit.prevent="updateItem">
                <label for="name">First Name:</label>
                <input type="text" id="name" v-model="contact.name" disabled>
            </form>
            <form @submit.prevent="updateItem">
                <label for="name">Last Name:</label>
                <input type="text" id="name" v-model="contact.lastname" disabled>
            </form>
            <form @submit.prevent="updateItem">
                <label for="name">e-Mail:</label>
                <input type="text" id="name" v-model="contact.email" disabled>
            </form>
            <form @submit.prevent="updateItem">
                <label for="name">Phone:</label>
                <input type="text" id="name" v-model="contact.phone" disabled>
            </form>
            <form @submit.prevent="updateItem">
                <label for="name">Company:</label>
                <input type="text" id="name" v-model="contact.company" disabled>
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