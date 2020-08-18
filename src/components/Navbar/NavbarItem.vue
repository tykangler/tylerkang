<template>
   <div class="d-inline-flex flex-row align-items-center"
        @mouseover="hovered = true" 
        @mouseleave="hovered = false">
      <navdot class="mr-2" 
              :expand="hovered" 
              :radius="navDotRadius" />
      <a class="navbar-content callout highlight"
         :style="textStyle">
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
         hovered: false,
         navDotRadius: .5,
      }
   },
   props: {
      baseColor: {
         // sets the color of inner nav dot
         type: String,
         default: "#ffffff"
      },
      hoverColor: {
         // sets the color of the expanded nav dot border
         type: String,
         default: "#ffffff"
      },
   },
   computed: {
      textStyle: function() {
         return {
            opacity: this.hovered ? 1 : 0,
            fontSize: this.navDotRadius * 1.7 + 'em'
         }
      }
   }
}
</script>

<style lang="scss" scoped>
@import '@/styles/common/_constants';

.navbar-content {
   transition: all $transition-speed;
}
</style>