<template>
   <p :key="currentIndex" class="d-inline label"> {{ display }} </p>
</template>

<script>
export default {
   name: "Typewriter",
   data: function() {
      return {
         display: "",
      }
   },
   props: {
      // the words to cycle through
      words: {
         type: Array,
         required: true,
         validator: function(value) {
            return value.length != 0;
         }
      },
      // time per char in milliseconds
      typeSpeed: {
         type: Number,
         default: 120,
      },
      delayPerWord: {
         type: Number,
         default: 500
      }
   },
   mounted: function() {
      for (let word of this.words) {
         this.typeWord(word);
         await new Promise(resolve => setTimeout(resolve, 1000));
      }
   },
   methods: {
      typeWord: function(word) {
         this.display = word;
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