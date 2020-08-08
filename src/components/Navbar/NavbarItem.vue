<template>
   <div class="callout align-middle"
        @mouseover="hovered = true" 
        @mouseleave="hovered = false">
      <navdot class="mr-2" 
              :expand="hovered" 
              :color="currentColor" 
              :radius="navDotRadius" />
      <a class="navbar-content" 
         :style="textStyle">
         <slot />
      </a>
   </div>
</template>

<script>
import Navdot from '@/components/Navbar/Navdot'

export default {
   name: "NavbarItem",
   components: {
      Navdot
   },
   data: function() {
      return {
         hovered: false,
         navDotRadius: .3,

      }
   },
   props: {
      baseColor: {
         type: String,
         default: "black"
      },
      hoverColor: {
         type: String,
         default: "#FF7E7E"
      }
   },
   computed: {
      currentColor: function() {
         return this.hovered ? this.hoverColor : this.baseColor
      },
      textStyle: function() {
         return {
            color: this.currentColor,
            opacity: this.hovered ? 1 : 0,
            "font-size": this.navDotRadius * 3 + 'em'
         }
      }
   }
}
</script>

<style lang="scss" scoped>
.navbar-content {
   transition: all 300ms;
}
</style>