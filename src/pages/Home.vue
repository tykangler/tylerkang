<template>
   <div>
      <b-row class="intro">
         <b-col><introduction /></b-col>
      </b-row>
   </div>
</template>

<script>
import Introduction from '@/components/Introduction'

export default {
   name: 'Home',
   components: {
      Introduction
   }
}
</script>

<style lang="scss" scoped>

.intro {
   top: 200px;
}

</style>