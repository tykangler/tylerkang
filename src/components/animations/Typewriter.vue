<template>
   <transition name="typewriter" mode="out-in">
      <p :key="currentIndex" class="d-inline label"> {{ currentLabel }} </p>
   </transition>
</template>

<script>
export default {
   name: "Typewriter",
   data: function() {
      return {
         currentLabel: "",
         durations: []
      }
   },
   props: {
      words: {
         type: Array,
         required: true,
         validator: function(value) {
            return value.length != 0;
         }
      },
   },
   created: function() {
      this.currentLabel = this.words[0];
      this.durations = 
      window.setTimeout(() => {
         this.currentLabel = this.words[1];
      }, this.durations[0]);
      for (let i = 0; i < words.length; ++i) {
         window.setTimeout(() => this.currentLabel = this.words[i]);
      }
   }
}
</script>

<style lang="scss" scoped>
@keyframes type {
   from { width: 0%; }
   to { width: 100%; }
}
</style>