<template lang="html">
    <div>
        <!-- this is a modifier v-on:submit.prevent if we dont use this the page will refreshs -->
    <form v-on:submit.prevent>
        <h1>Modifiers</h1>
        <input type="text" class="input" placeholder="Enter your name" />
        <button type="submit" v-on:click="Alert ">Submit</button>
    </form>    
    </div>
</template>
<script setup lang="js">
    const Alert = () => {
        alert("Form submitted!");
        window.document.querySelector('.input').value = '';
    }
</script>
<style lang="">
    
</style>