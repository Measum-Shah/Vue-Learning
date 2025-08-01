<template lang="html">
    <div>
        <h1>Dynamic Attributes</h1>

        <!-- we can also bind attributes name dynamically -->
        <p v-bind:[thisIsClassAttribute]="title">Measum is here</p>
        <a v-on:[eventName]="doSomething" class="dynamicFunction"> Something will happen on click </a>
</div>
</template>
<script setup lang="js">
const thisIsClassAttribute = 'class';
// sd we have done binding of class attribute dynamically
// we can also bind other attributes dynamically like id, style, etc.
const title = 'title';


const eventName = 'click';
// we can also bind event names dynamically
const doSomething = () => {
    alert('You clicked the link!');
}


</script>
<style >
    .title {
        color: blue;
        font-size: 24px;
        font-weight: bold;
    }
    .title:hover {
        color: red;
    }

    .dynamicFunction{
        color: green;
        font-size: 20px;
        font-weight: bold;
        padding: 10px;
        cursor: pointer;
        border: 1px solid black;
        border-radius: 5px;
        text-decoration: none;
        background: #000;
    }
</style>