<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const redirect = () => {
  router.push({ name: 'Home' }); // Redirect to Home page
};

const back = () => { // Navigate back in history
  router.go(-1); 
};

const forward = () => { // Navigate forward in history
  router.go(1); 
};
</script>

<template>
  <div>
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'Contact' }">Contact</router-link> |
      <router-link :to="{ name: 'Job' }">Jobs</router-link>
    </nav>

    <div id="btns">
      <button @click="redirect" id="btn">Redirect</button>
      <button @click="back" id="btn">Back</button>
      <button @click="forward" id="btn">Forward</button>
    </div>

    <router-view />
  </div>
</template>


<style scoped>
nav {
  margin-bottom: 20px;
  width: 100vw;
  text-align: center;
}
#nav{
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 5px;
  border-radius: 20%;
  text-decoration: none;
  
}

#nav a.router-link-active {
  color: #42b983;
}
#nav a.router-link-exact-active {
  background-color: black;
  text-decoration: underline;
}

#btn {
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
#btn:hover {
  background-color: #2c3e50;
}
#btns {
  text-align: center;
  margin-top: 20px;
}
</style>
