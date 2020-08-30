<template>
   <div class="project-item d-inline-block">
      <a :href="href" class="project-link">
         <h3 class="project-title"> 
            {{ title }} 
         </h3>
         <p class="project-content">
            <slot />
         </p>
         <b-badge class="project-tag mr-2" 
                  v-for="tag in tags" :key="tag"> 
            {{ tag }} 
         </b-badge>
      </a>
   </div>
</template>

<script>
export default {
   name: "Project",
   props: {
      // title of project
      title: {
         type: String,
         required: true
      },
      // link to additional project details
      href: {
         type: String,
         required: true,
      },
      tags: {
         type: [Array, String],
         required: false,
      }
   }
}
</script>

<style lang="scss" scoped>

@import '@/styles/common/_constants';
@import '~bootstrap';

.project {
   &-item {
      position: relative;
      transition: transform ($transition-speed * 2.5);

      &:hover {
         transform: scale(1.02);
      }
   }

   &-link {
      color: inherit;
      text-decoration: none;

      &:hover {
         color: rgba($base-color, 0.85);
         text-decoration: none;
      }
   }
}



</style>