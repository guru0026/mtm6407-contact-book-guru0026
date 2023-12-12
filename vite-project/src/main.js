import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'


// VIEWS
import Home from './views/Home.vue'
import Details from './views/Details.vue'
import Edit from './views/Edit.vue'
import Add from './views/Add.vue'

// CONFIG
const routes = [
    { path: '/', component: Home },
     { path: '/Details/:id', component: Details, props: true },
     { path: '/Edit/:id', component: Edit, props: true },
    { path: '/Add', component: Add },
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes:routes
})

createApp(App).use(router).mount('#app')
