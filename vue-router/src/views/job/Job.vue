<template lang="html">
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'Jobs', params: { id: job.id.toString() } }">

        <h2>{{ job.title }}</h2>
        </router-link>    
    </div>
</template>
<script setup>

import { ref } from 'vue';

const jobs = ref([
    { id: 1, title: 'Software Engineer', description: 'Develop and maintain software applications.' },
    { id: 2, title: 'Data Scientist', description: 'Analyze data to extract insights and build models.' },
    { id: 3, title: 'Product Manager', description: 'Oversee product development and strategy.' }
]);
</script>
<style>
    
</style>