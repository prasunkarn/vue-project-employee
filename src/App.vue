<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import optionvscomposition from './components/optionvscomposition.vue';
// import Vbind from './components/vbind.vue';
// import employee from './components/employee.vue';
// import Form from './components/task.vue';
// import Home from './VIEW/home.vue'
// import About from './VIEW/about.vue'
// import Contact from './VIEW/contact.vue'
// import Employee from './VIEW/employee.vue'
// import Task from './components/Task.vue';
</script>

<template>
  
 <!-- <div>
  //   <a href="https://vitejs.dev" target="_blank">
  //     <img src="/vite.svg" class="logo" alt="Vite logo" />
  //   </a>
  //   <a href="https://vuejs.org/" target="_blank">
  //     <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  //   </a>
  // </div>
  // <HelloWorld msg="Vite + Vue" /> -->
  <!-- <optionvscomposition /> -->
  <!-- <vbind /> -->
  <!-- <employee /> -->
  <!-- <Form /> -->
  <!-- <About />
  <Home />
  <Contact />
  <Employee /> -->
  <!-- <task /> -->
  <div style="background-color: rgb(24, 26, 28); color: black; padding: 5px; padding-left: 2px; padding-right: 2px;" >
 <router-link :to="{ name: 'home'}">Home</router-link> |
 <router-link :to="{ name: 'employee' }">Employees</router-link> |
 <router-link :to="{ name: 'contact'}">Contact</router-link>| 
 <router-link :to="{ name: 'about' }">About</router-link>
</div>
<router-view/>
<hr><hr>
<Task/>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
