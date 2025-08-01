<template lang="html">
    <div>
    <h1>Directives</h1>
    <h1 class="week">Day Checker</h1>
    <!-- dont get worried about v-mondal think it as data is transferred as wriiten in inpurt to the variable in real time -->
    <input type="text" v-model="day" placeholder="Enter a number of day of the week" />
    <p v-if="day == 1">Monday</p>
    <p v-else-if="day == 2">Tuesday</p>
    <p v-else-if="day == 3">Wednesday</p>
    <p v-else-if="day == 4">Thursday</p>
    <p v-else-if="day == 5">Friday</p>
    <p v-else-if="day == 6">Saturday</p>        
    <p v-else-if="day == 7">Sunday</p>
    <p v-else>Invalid day number</p>
    </div>

    <!-- so we see directives as v-if v-else-if v-else -->
     <!-- There are more such as v-on:click -->
      <hr>
      <!-- color changer -->
    <h1 class="title">Color Changer</h1>
   <p>select the color</p>
   <input type="text" v-model="color" placeholder="Enter a color"/>
   <button v-on:click="changecolor">Change color</button>
</template>
<script setup lang="js">
import { ref } from 'vue';
// Dont focus on ref much at this point, we will cover it in detail later
// ref is a function that creates a reactive reference to a value
// It is used to create reactive variables in Vue.js
// just know its just a variable
const day = ref('');
const color = ref('');
const changecolor = () => {
    window.document.querySelector('.title').style.color =  color.value;
}

</script>
<style lang="">
  
</style>