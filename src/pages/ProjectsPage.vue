<template>
   <b-container class="page">
      <b-row :style="{ marginBottom: '50px' }">
         <b-col>
            <h2 class="section-heading">A few of my personal projects</h2>
         </b-col>
      </b-row>
      <!-- <hr class="divider my-5" /> -->
      <b-row >
         <b-col lg="6" v-for="{ title, content, href, tags } of projects" :key="title">
            <project class="project ml-lg-5" :title="title" :href="href" :tags="tags">
               {{ content }}
            </project>
         </b-col>
      </b-row>
      <b-row>
         <b-col class="text-center">
            <b-button href="../assets/TylerKangResume.pdf" variant="success">Resume</b-button>
         </b-col>
      </b-row>
   </b-container>
</template> 

<script>
import Project from '@/components/Project';

export default {
   name: "ProjectsPage",
   components: {
      Project
   },
   data: function() {
      return {
         projects: [
            { 
               title: "Ranked Search Engine",
               content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
               href: "#",
               tags: [
                  "foo",
                  "bar",
                  "baz"
               ]
            },
            {
               title: "Maze Solver",
               content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.` ,
               href: "#",
               tags: [
                  "foo",
                  "bar",
                  "baz"
               ]
            },
            {
               title: "Baz",
               content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. ` ,
               href: "#",
               tags: [
                  "foo",
                  "bar",
                  "baz"
               ]
            }
         ]
      }
   },
}
</script>

<style lang="scss" scoped>

.project {
   margin-bottom: 100px;
}

</style>