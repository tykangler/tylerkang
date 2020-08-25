<template>
   <div>
      <div class="gap" />
      <introduction />
   </div>
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