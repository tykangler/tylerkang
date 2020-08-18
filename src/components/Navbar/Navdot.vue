<template>
   <!-- <div> -->
   <span class="nav-dot d-inline-block" 
         :style="[backgroundStyle, sizeStyle, borderStyle]" />
   <!-- </div> -->
</template>

<script>
import chroma from "chroma-js"

export default {
   name: "Navdot",
   props: {
      expand: {
         // put dot in expanded state
         type: Boolean,
         required: true
      },
      radius: {
         // the starting radius of the dot in 'em'
         type: Number,
         required: true
      },
      color: {
         // color of inner circle, opacity set to slightly lower
         type: String,
         default: "#ffffff"
      },
      expandColor: { 
         // expanded border color, opacity set to 1
         // currently must be in hex format
         type: String,
         default: "#ffffff" 
      }
   },
   computed: {
      backgroundStyle: function() {
         return {
            backgroundColor: chroma(this.color).alpha(0.7).css()
         }
      },
      sizeStyle: function() {
         return {
            width: this.radius * 2 + 'em',
            height: this.radius * 2 + 'em'
         }
      }, 
      borderStyle: function() {
         return {
            borderColor: chroma(this.expandColor).alpha(this.expand ? 1 : 0).css(),
            borderWidth: this.radius / 3.3 + 'em'
         }
      }
   }
}
</script>

<style lang="scss" scoped>
@import '@/styles/common/_constants';

.nav-dot {
   border-radius: 100%;
   transition: all $transition-speed;
   border-style: solid;
   background-clip: padding-box;
}
</style>