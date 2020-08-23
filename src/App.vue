<template>
   <div>
      <b-container id="main">
         <home id="home" />
         <!-- <About id="about" /> -->
         <!-- <Projects id="projects" /> -->
         <!-- <Contact id="contact" /> -->
      </b-container>
      <nav-bar class="nav-bar" :items="navBarItems" scroll-spy="main"/>
   </div>
</template>

<script>
import HomePage from '@/pages/HomePage'
// import AboutPage from '@/pages/AboutPage'
// import ProjectsPage from '@/pages/ProjectsPage'
// import ContactPage from '@/pages/ContactPage'
import NavBar from '@/components/Navbar/Navbar'

export default {
   name: 'App',
   components: {
      HomePage, 
      // AboutPage, 
      // ProjectsPage, 
      // ContactPage, 
      NavBar
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

.nav-bar {
   left: 20px;
   top: 100px;
   position: fixed;
}

</style>