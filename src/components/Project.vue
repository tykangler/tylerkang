<template>
   <div class="project-item shadow">
      <a :href="href" class="project-link">
         <h3 class="project-title"> 
            {{ title }} 
         </h3>
         <p class="project-content">
            <slot />
         </p>
         <h4>
            <b-badge pill variant="primary" class="mr-2" v-for="tag in tags" :key="tag"> 
               {{ tag }} 
            </b-badge>
         </h4>
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
      width: 70%;
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
         text-decoration: inherit;
      }
   }

   @include media-breakpoint-down (sm) {
      &-item {
         width: 100%;
      }
   }
}



</style>