<script setup>
import {ref ,computed} from 'vue'
import { useCartStore } from '../Stores/cart.js';

const cartStore = useCartStore()





// const oddorEven = computed(()=>{
//     return cartStore.count.value%2==0
// })

</script>
<template>
<div>
{{ cartStore.count }}
</div>
<div>
<button @click="cartStore.incrementCount">+</button>
<button @click="cartStore.decrementCount">-</button>
</div>
<div>
This counter is: {{ cartStore.oddorEven }}

</div>
</template>