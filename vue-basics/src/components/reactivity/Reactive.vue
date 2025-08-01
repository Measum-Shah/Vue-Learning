<template>
  <div>
    <h1>Reactive Counter</h1>
    
    <p>Counter: {{ state.count }}</p>
    
    <input type="number" v-model.number="state.step" placeholder="Step" />
    
    <!-- @click is shorthand for v-on:"click" -->

    <button @click="state.count += state.step">Increment</button>
    <button @click="state.count -= state.step">Decrement</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  count: 0,
  step: 1
});

const reset = () => {
  state.count = 0;
  state.step = 1;
};
</script>

<style>
button {
  margin: 4px;
  padding: 5px 10px;
}
</style>
