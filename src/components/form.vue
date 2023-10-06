<template>
    <div>
      <h1>Form</h1>
      <form @submit.prevent="submitForm" >
        <div >
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="formData.username" required />
        </div>
        <div >
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div >
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="formData.password" required />
        </div>
        <div >
          <button type="submit">Submit</button>
        </div>
      </form>
  
      <div v-if="submitted" >
        <h2>Form Data:</h2>
        <p><strong>Username:</strong> {{ formData.username }}</p>
        <p><strong>Email:</strong> {{ formData.email }}</p>
        <p><strong>Password:</strong> {{ formData.password }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          username: '',
          email: '',
          password: ''
        },
        submitted: false
      };
    },
    methods: {
      submitForm() {
        // Set the submitted flag to true
        this.submitted = true;
      }
    }
  };
  </script>
  
  <!-- <style scoped>
  /* Form Container */
  .form {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    background-color: #4f2b2b;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Form Group */
  .form-group {
    margin-bottom: 15px;
  }
  
  /* Label Styles */
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
  
  /* Input and Textarea Styles */
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  /* Button Styles */
  .submit-button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.5s;
  }
  
  .submit-button:hover {
    background-color: black;
  }
  
  .submitted-data {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #4f2b2b;
  }
  </style> -->
  