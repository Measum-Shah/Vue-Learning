<template lang="html">
    <div>
        <h1>Attribute Binding</h1>
    <!-- Mustaches cannot be used inside HTML attributes. Instead, use a v-bind directive: -->
        <h1 v-bind:class="className">This is a title</h1>
        <p>Try changing the value of className in the script section to see how it affects the title attribute.</p>

    <!-- Dynamically Binding Multiple Attributes -->
        <input type="text" v-bind="details" />

        <!-- we can also use shorthand syntax for v-bind directive, which is just a colon (:) -->
        <h1 :class="className">This is a title with shorthand syntax</h1>

        
    <!-- Calling Functions -->
        <input type="text" v-bind:value="printName('Measum Shah')" />
    </div>
</template>
<script setup>
// we will use v-bind directive to bind the value of name variable to the title attribute of the h1 element
    const className = "Title"

// we can also bind multiple attributes at once using v-bind directive
    const details =  {
        class: "vue Basics",
        value: "Welcome to Vue.js Basics!"
    }

    const printName = (name) => {
       const message = `Hello, ${name}`;
         return message;
    }
</script>
<style >

.Title {
    color: blue;
    font-size: 24px;
    font-weight: bold;
}
</style>