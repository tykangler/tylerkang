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
import Home from '@/pages/Home'
// import About from '@/pages/About'
// import Projects from '@/pages/Projects'
// import Contact from '@/pages/Contact'
import NavBar from '@/components/Navbar/Navbar'

export default {
   name: 'App',
   components: {
      Home, 
      // About, 
      // Projects, 
      // Contact, 
      NavBar
   },
   data: function() {
      return {
         navBarItems: [
            { label: "Home", href: "#home" },
            { label: "About", href: "#foo" },
            { label: "Projects", href: "#bar" },
            { label: "Contact", href: "#baz" },
            { label: "Resume", href: "#babar" }]
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