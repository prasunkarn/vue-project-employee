<script setup>
import {ref} from 'vue';
const employees = ref([
{ id: 1, firstName: 'Prasun', lastName: 'Karn' }, 
{ id: 2, firstName: 'jsdhcv', lastName: 'kashc' },
{ id: 3, firstName: 'sdjhcv', lastName: 'sdjyhcv' },
{ id: 4, firstName: 'sdkjv', lastName: 'ksduv' }
])
</script>
<template>
<h2>Employees</h2>
<p v-for="employee in employees" :key="employee.id">
    <router-link :to="{ name: 'employeedetail', params:{id:employee.id} }">{{ employee.firstName}} {{ employee.lastName }}</router-link>
</p>
</template>