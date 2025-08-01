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
    <!-- <DynamicAttributes /> -->

    <!-- This component shows modifiers -->
    <!-- <Modifiers /> -->

    <!-- This component shows usage of ref() -->
     <!-- <Ref/> -->

    <!-- This component shows usage of reactive() -->
    <Reactive />
</div>
</template>
<script setup lang="js">
import AttributeBinding from './components/AttributeBinding.vue';
import TextInterpolation from './components/TextInterpolation.vue';
import Directives from './components/Directives.vue';
import DynamicAttributes from './components/DynamicAttributes.vue';
import Modifiers from './components/Modifiers.vue';
import Ref from './components/reactivity/Ref.vue';
import Reactive from './components/reactivity/Reactive.vue';
</script>
<style lang="">
  
</style>