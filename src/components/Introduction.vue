<template>
   <div class="title">
      <h1>Hey, I'm <span class="highlight">Tyler!</span></h1>
      <h1>A <typewriter class="highlight" :labels="labels"/></h1>
   </div>
</template>

<script>
import Typewriter from '@/components/animations/Typewriter'

export default {
   name: "Introduction",
   components: {
      Typewriter
   },
   data: function() {
      return {
         labels: ["Foo", "Bar", "Baz", "Label", "Wizard", "Jedi Master", "Luke Skywalker"]
      }
   }
}
</script>

<style lang="scss" scoped>

</style>