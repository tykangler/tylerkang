<template>
   <b-container class="page">
      <div class="gap" />
      <introduction />
   </b-container>
</template>

<script>
import Introduction from '@/components/Introduction'

export default {
   name: 'HomePage',
   components: {
      Introduction
   }
}
</script>

<style lang="scss" scoped>

.gap {
   height: 300px;
}

</style>