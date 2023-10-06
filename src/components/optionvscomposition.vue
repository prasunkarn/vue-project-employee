<!-- <script>
export default {
    data() {
      return {
        username: 'Prasun',
        isModalShown: false
      }
    }
    ,
    methods: {
      updateUsername(newUsername) {
        this.username = newUsername
      },
      showModal() {
        this.isModalShown = true
      },
      mounted() {
        this.updateUsername('Prasun')
        this.showModal()
      }
    }
  }
  </script>
  <template>
    <div>
      <p>Username: {{ username }}</p>
      <button @click="updateUsername('Karn')">Update Username</button>
    </div>
  </template>
  
   -->

   
  
  <script setup>

  import { ref, onMounted, reactive } from 'vue';
  
  const user = ref({
  name: 'John',
  age: 30,
});

  const reuser = reactive({
  name: 'kdjb',
  age: 986,
});
      function change(nuser)
      {
        reuser.name=nuser;
        reuser.address='sdkjhcv';
        user.value={name:'pk',age:'8',add:'sldjk'}
      }      

      
  
        change('karn');
    
      const username = ref('Prasun');
      
      function updateUsername  (newUsername) {
        username.value = newUsername;
      };
  
      onMounted(() => {
        updateUsername('Prasun');
        
      });
      
      const isModalShown = ref(false);

      function showModal() {
        isModalShown.value = true;
      };
  
      
      onMounted(() => {
        
        showModal();
      });
  
      const showname = ref(false)
      
      onMounted(() => {
        showModal();
      });
      
      
      // Expose data and functions to the template
    //   return {
    //     username,
    //     updateUsername,
    //   };

  </script>
  
  <template>
    <div>
     
      <!-- <h2 v-if="showname">{{ username }}</h2>
      <button @click="showname=!showname">Update Username</button>
      <p>Username: {{ username }}</p>
      <p>{{ isModalShown }}</p> -->

      <p>{{ user }}</p>
      <p>{{ reuser }}</p>
    </div>
  </template>