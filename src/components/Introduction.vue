<template>
   <div class="title">
      <h1><slot class="highlight" /></h1>
      <h1>A 
         <transition name="rotate-labels">
            <p> {{ currentLabel }} </p>
         </transition>
      </h1>
   </div>
</template>

<script>
export default {
   name: "Introduction",
   props: {
      labels: {
         type: Array,
         required: true
      }
   }
}
</script>

<style>

</style>