<template lang="html">
     

    <form class="form-binding" typeof="form" method="submit" @submit.prevent    >
       <h1>Form</h1>
        <div>
            <label for="">Name</label>
             <input type="text" v-model="name" placeholder="Enter your name"  />
             <!-- {{ name }} -->
        </div>
       
        <div>
            <label for="">Email</label>
             <input type="email" v-model="email" placeholder="Enter your email" />
             <!-- {{ email }} -->
        </div>
       
        <div>
            <label for="">Gender</label>
            <label for="">male</label>
             <input type="radio" v-model="gender" value="male" />
             <label for="">female</label>
             <input type="radio" v-model="gender" value="female" />
             <!-- {{ gender }} -->
        </div>
       
        <div>
            <label for="">Password</label>
             <input type="password" v-model="password" placeholder="Enter password" />
             <!-- {{ password }} -->
        </div>
       
        <div>
            <label for="">Confirm password</label>
             <input type="password" v-model="confirmPassword" placeholder="Confirm Password" />
             <!-- {{ confirmPassword }} -->
        </div>
       
        <div>
            <label for="">Agree to our policy</label>
             <input type="checkbox" v-model="agreeToPolicy" value="false" />
             <!-- {{ agreeToPolicy }} -->
        </div>
       <button type="submit" @click="onSubmit">Submit</button>
        
    </form>
</template>
<script setup lang="js">
import { ref } from 'vue';

const name = ref('')
const email = ref('')  
const gender = ref('')
const password = ref('')
const confirmPassword = ref('')
const agreeToPolicy = ref(false)

const onSubmit = () => {
    if (name.value && email.value && password.value && confirmPassword.value && agreeToPolicy.value && gender.value) {
        if(password.value === confirmPassword.value){
            alert(`Form submitted successfully!\nName: ${name.value}\nEmail: ${email.value}`) 
        }
        if(password.value !== confirmPassword.value){
        alert('Passwords do not match!')
        }}
      else {
        alert('Please fill all the fields!')
      }
     }
</script>
<style >

    .form-binding {
   display : flex;
   flex-direction: column;
   width: 100vw;
   height: 80vh;
   gap: 20px;
   justify-content: evenly;
    align-items: center;

    }
</style>