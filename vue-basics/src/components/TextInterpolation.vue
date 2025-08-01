<template lang="html">
  <div>
    <h1>{{ name }}</h1> 
<!-- this syntax is called as mustache syntax, it is used to bind data to the template also known as text interpolation    -->
    <p>{{ message }}</p>
  </div>
</template>
<script setup  lang="js">



// these variables are bind above to the template using mustache syntax
  const name = "vue Basics";
  const message = "Welcome to Vue.js Basics!";
  



</script>
<style lang="">
  
</style>