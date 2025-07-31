<template>
  <div>
    <h1>Job Details</h1>
    <p>The Job ID is: {{ id }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const { id } = props
</script>
