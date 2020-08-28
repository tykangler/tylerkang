<template>
   <b-container class="page">
      <b-row>
         <b-col>
            <h2 class="section-heading highlight">A few of my personal projects</h2>
         </b-col>
      </b-row>
      <hr class="divider my-5" />
      <b-row v-for="{ title, content, href, tags } of projects" :key="title">
         <b-col>
            <project class="project ml-5" :title="title" :href="href" :tags="tags">
               {{ content }}
            </project>
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