<template>
    <div>
      <h1>Employee Cart</h1>
      <button @click="toggleView('list')">List View</button>
      <button @click="toggleView('grid')">Grid View</button>
      <div v-if="view === 'list'" class="employee-list">
        <div class="employee-item" v-for="employee in employees" :key="employee.id">
          <img :src="require(`@/assets/${employee.image}`)" :alt="employee.name" />
          <p>{{ employee.name }}</p>
        </div>
      </div>
      <div v-else-if="view === 'grid'" class="employee-grid">
        <div class="employee-item" v-for="employee in employees" :key="employee.id">
          <img :src="require(`@/assets/${employee.image}`)" :alt="employee.name" />
          <p>{{ employee.name }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import employeesData from "@/assets/employees.json";
  
  export default {
    data() {
      return {
        employees: employeesData,
        view: "list", // Default view
      };
    },
    methods: {
      toggleView(view) {
        this.view = view;
      },
    },
  };
  </script>
  
  <style scoped>
  .employee-list,
  .employee-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .employee-item {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    width: 200px;
  }
  </style>
  