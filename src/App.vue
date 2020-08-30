<template>
   <div id="app" class="parallax-container">
      <main class="parallax-layer-0">
         <home-page id="home" />
         <about-page id="about" />
         <projects-page id="projects" />
         <contact-page id="contact" />
      </main>
      <div id="background" />
      <div id="small-stars" class="parallax-layer-3" />
      <div id="medium-stars" class="parallax-layer-2" />
      <div id="large-stars" class="parallax-layer-1" />
   </div>
</template>

<script>
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ProjectsPage from '@/pages/ProjectsPage'
import ContactPage from '@/pages/ContactPage'
// import Navbar from '@/components/Navbar/Navbar'

export default {
   name: 'App',
   components: {
      HomePage, 
      AboutPage, 
      ProjectsPage, 
      ContactPage, 
      // Navbar,
   },
   data: function() {
      return {
         navBarItems: [
            { label: "Home", href: "#home" },
            { label: "About", href: "#" },
            { label: "Projects", href: "#" },
            { label: "Contact", href: "#" },
            { label: "Resume", href: "#" }
         ],
         contactLinks: [
            { label: "Linked In"}
         ]
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