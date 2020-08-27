<template>
   <div class="project-item">
      <h2 class="project-title"><slot name="title" /></h2>
      <p class="project-content">
         <slot name="content" />
      </p>
   </div>
</template>

<script>
export default {
   name: "Project"
}
</script>

<style lang="scss" scoped>

.project {
   &-item {
      position: relative;
   }

   &-title {
      
   }

   &-content {

   }
}

</style>