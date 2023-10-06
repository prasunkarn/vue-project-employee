import { createApp } from 'vue'
import './style.css'
import {createPinia} from 'pinia'
import App from './App.vue'
import Home from './VIEW/home.vue'
import About from './VIEW/about.vue'
import Contact from './VIEW/contact.vue'
import Employee from './VIEW/employee.vue'
import EmployeeDetail from './VIEW/employeedetail.vue'
import {createRouter, createWebHistory} from 'vue-router'
// import Task from './components/Task.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/employee', name: 'employee', component: Employee},
    { path: '/employeedetail/:id', 
    name: 'employeedetail',
    props:true,    
    component: EmployeeDetail}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

const store =createPinia()
createApp(App).use(router).use(store).mount('#app')
