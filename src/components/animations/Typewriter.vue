<!-- Plan to optimize this later. -->

<template>
   <!-- <transition name="type"> -->
      <p :key="display" class="d-inline label"> {{ display }} </p>
   <!-- </transition> -->
</template>

<script>
export default {
   name: "Typewriter",
   data: function() {
      return {
         display: "",
         durations: this.words.map((val) => this.typeDelay * val.length * 2 + this.postTypeDelay)
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
      typeDelay: {
         type: Number,
         default: 120,
      },
      eraseDelay: {
         type: Number,
         default: 500
      },
      postTypeDelay: {
         type: Number,
         default: 500
      }
   },
   mounted: async function() {
      for (let word of this.words) {
         await this.typeWord(word);
         await this.sleep(this.postTypeDelay);
      }
   },
   methods: {
      typeWord: async function(word) {
         for (let char of word) {
            this.display += char;
            await this.sleep(this.typeDelay);
         }
         await this.sleep(this.eraseDelay);
         for (let i = word.length - 1; i >= 0; --i) {
            this.display = this.display.slice(0, i);
            await this.sleep(this.typeDelay);
         }
      },
      sleep: async function(delay) {
         return new Promise(resolve => setTimeout(resolve, delay));
      }
   }
}
</script>

<style lang="scss" scoped>



</style>