<script setup>
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})


</script>

<template>
<h1>Authon Name : {{ author.name }}</h1>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
  <h1>Books</h1>
  <li v-for="(book, index) in author.books" :key="index">
    <ul>{{ book }}</ul></li>
</template>