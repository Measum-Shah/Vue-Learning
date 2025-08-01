<template lang="html">
  <div>
    <!-- You can learn any concept by un commenting that component in the App.vue file. -->

    <!-- This component displays text interpolation using mustache syntax -->
    <!-- <TextInterpolation /> -->

    <!-- This Component will show attribute binding -->
   <!-- <AttributeBinding/> -->

   <!-- Thi Component shows basic use of directives -->
    <!-- <Directives /> -->

    <!-- This component shows dynamic attributes -->
    <DynamicAttributes />
  </div>
</template>
<script setup lang="js">
import AttributeBinding from './components/AttributeBinding.vue';
import TextInterpolation from './components/TextInterpolation.vue';
import Directives from './components/Directives.vue';
import DynamicAttributes from './components/DynamicAttributes.vue';
</script>
<style lang="">
  
</style>