<template lang="html">
    <div>
        <h1>Ref</h1>
        <h1>password Generator</h1>
        <input type="text" v-model="password" placeholder="......"/>
        <button v-on:click="generatePassword">generate strong password</button>
    </div>
</template>
<script setup lang="js">
import { ref } from 'vue'; // Import ref from Vue to create reactive references
const password = ref(''); // Create a reactive reference for password input
    const generatePassword = () =>{
        const chracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
        let generatedPassword = '';
        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * chracters.length);
            generatedPassword += chracters[randomIndex];    
    }
        password.value = generatedPassword; // Update the reactive reference with the generated password
    }

</script>
<style >
 
</style>