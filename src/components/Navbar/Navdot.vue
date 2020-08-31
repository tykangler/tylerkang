<template>
   <span :class="['nav-dot', 'd-inline-block', { 'expand': expand }]" 
         :style="[sizeStyle, borderStyle]" />
</template>

<script>

export default {
   name: "Navdot",
   data: function() {
      return {
         color: "#ffffff"
      }
   },
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
   },
   computed: {
      sizeStyle: function() {
         return {
            width: this.radius * 2 + 'em',
            height: this.radius * 2 + 'em'
         }
      }, 
      borderStyle: function() {
         return {
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
   background-color: rgba(#fff, 0.7);
   border-color: rgba(#fff, 0);
}

.nav-dot.expand {
   border-color: rgba(#fff, 1);
}

</style>