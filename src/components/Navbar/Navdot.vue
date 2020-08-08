<template>
   <span class="static-dot" :style="[{ 'background-color': color }, sizeStyle]" />
</template>

<script>
export default {
   name: "Navdot",
   props: {
      expand: {
         type: Boolean,
         required: true
      },
      radius: {
         type: Number,
         required: true
      },
      color: {
         type: String,
         required: true
      },
      expandColor: {
         type: String,
         default: "black"
      }
   },
   computed: {
      sizeStyle: function() {
         return {
            width: this.radius * 2 + 'em',
            height: this.radius * 2 + 'em'
         }
      }, 
   }
}
</script>

<style lang="scss" scoped>
* {
   box-sizing: border-box;
}

.static-dot {
   position: relative;
   border-radius: 50%;
   display: inline-block;
   transition: all 300ms;
}

.dynamic-dot {
   position: absolute;
   background-color: black;
   transition: all 300ms;
   width: 99%;
   height: 99%;
   top: 0;
   left: 0;
   display: inline-block;
   z-index: -1;
   border-radius: 50%;
}

.dynamic-dot.large {
   transform: scale(1.8);
}
</style>