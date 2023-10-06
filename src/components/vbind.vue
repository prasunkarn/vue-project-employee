<script setup>
import { ref} from 'vue';

const empid = ref('10') 
const textcolor=ref('textstyle');
const content = ref('<b>LTIMindtree</b>')
const status = ref(true)
const attr1=ref('id')
const attr2=ref('class')
const user=ref(0)
const cart=ref(['first item', '2nd item'])
function additem(){
    cart.value.push('X')
}
function removeitem(){
    cart.value.pop()
}
const persons = ref([{id:1, name: "Raj", city: "Bangalore"},{id:2, name: "Sam", city: "NewYork"}])
const country=ref()
</script>

<template>

<select v-model="country" multiple>
    <option value="IN">India</option>
    <option value="US">USA</option>
    <option value="UK">UK</option>
</select>{{ country }}<br/>


<ul>
    <li v-for="(value) in persons">{{ count++}} {{ value.name }} {{ value.city }}

    </li>
</ul>
<button v-on:click=additem()>Add</button>
<button v-on:click=removeitem()>Remove</button>
<ul>
    <li v-for="item in cart">{{ item }}</li>
</ul>
<button v-on:click="user++">Add</button>
<h4 v-if="user==0">No user</h4>
<h4 v-else-if="user>0">{{ user }} user</h4>
<!-- <div :[attr1]="divId" :[attr2]="textcolor" v-html="content"></div> -->
<div :id="empid" :class="textcolor" v-html="content">
</div>
<div v-if="status">
<p>if content</p>
</div>


<div v-show="status">
<p>show content</p>
</div>

 </template>

 <style>

.textstyle{
color: blue

}
</style>