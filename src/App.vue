<template>
   <div>
      <!-- <navbar class="nav-bar" :items="navBarItems" /> -->
      <home-page id="home" />
      <about-page id="about" />
      <!-- <projects-page id="projects" /> -->
      <!-- <contact-page id="contact" /> -->
   </div>
</template>

<script>
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
// import ProjectsPage from '@/pages/ProjectsPage'
// import ContactPage from '@/pages/ContactPage'
// import Navbar from '@/components/Navbar/Navbar'

export default {
   name: 'App',
   components: {
      HomePage, 
      AboutPage, 
      // ProjectsPage, 
      // ContactPage, 
      // Navbar,
   },
   data: function() {
      return {
         navBarItems: [
            { label: "Home", href: "#home" },
            { label: "About", href: "#" },
            { label: "Projects", href: "#" },
            { label: "Contact", href: "#" },
            { label: "Resume", href: "#" }]
      }
   }
}
</script>

<style lang="scss" scoped>

// .nav-bar {
//    bottom: 0px;
//    left: 100px;
// }

</style>