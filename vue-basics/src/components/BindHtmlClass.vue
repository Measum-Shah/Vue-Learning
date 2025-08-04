<template>
  <div>
    <h1>Bind HTML Class</h1>
    <h2>Binding using a Reactive Object</h2>

    <!-- 🔗 Object-based dynamic class binding -->
    <div class="static" :class="classObject">
      This div has class bindings from an object.
    </div>

    <!-- 🧾 Display current class states -->
    <p>Status:</p>
    <ul>
      <li>active: {{ classObject.active }}</li>
      <li>text-danger: {{ classObject['text-danger'] }}</li>
    </ul>

    <!-- 🔘 Toggle buttons for object-based class binding -->
    <button @click="classObject.active = !classObject.active">
      Toggle active
    </button>
    <button @click="classObject['text-danger'] = !classObject['text-danger']">
      Toggle text-danger
    </button>
  </div>

  <div>
    <h1>Binding Using a Reactive Array</h1>

    <!-- 🔗 Array-based class binding -->
    <!-- isActive.value is used because isActive is a ref -->
    <!-- dangerClass is applied unconditionally (constant string) -->
    <div
      class="static"
      :class="[isActive.value ? activeClass : '', dangerClass]"
    >
      This div binds class from an array.
    </div>

    <!-- 🔘 Button to toggle isActive state -->
    <button @click="isActive.value = !isActive.value">
      Toggle isActive (array binding)
    </button>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue' // ✅ Added `ref` import

// 🧠 Reactive object for object-based class binding
const classObject = reactive({
  active: true,
  'text-danger': false
})

// 🎯 Reactive ref for array-based class binding
const isActive = ref(true) // ✅ Declared properly

// 📌 Static class names to be used conditionally in the array
const activeClass = 'active'
const dangerClass = 'text-danger'
</script>

<style scoped>
.static {
  padding: 10px;
  border: 1px solid #ccc;
  margin: 1rem 0;
  background-color: #f9f9f9;
}

.active {
  background-color: lightgreen;
  font-weight: bold;
}

.text-danger {
  color: red;
  border-color: red;
}
</style>
