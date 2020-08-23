<template>
   <div class="d-inline-flex flex-row align-items-center"
        @mouseover="active=true"
        @mouseleave="active=false">
      <navdot :expand="active" 
              :radius="navDotRadius"
              class="mr-2" />
      <a class="navbar-link callout highlight"
         :style="textStyle"
         :href="href">
         <slot />
      </a>
   </div>
</template>

<script>
import Navdot from "./Navdot"

export default {
   name: "NavbarItem",
   components: {
      Navdot
   },
   data: function() {
      return {
         navDotRadius: .5,
         active: false
      }
   },
   props: {
      href: {
         type: String,
         required: true
      },
   },
   computed: {
      textStyle: function() {
         return {
            opacity: this.active ? 1 : 0,
            fontSize: this.navDotRadius * 1.7 + 'em'
         }
      }
   }
}
</script>

<style lang="scss" scoped>
@import '@/styles/common/_constants';

.navbar-link {
   transition: all $transition-speed;
   text-decoration: none;
}
</style>