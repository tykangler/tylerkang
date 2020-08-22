<template>
   <div>
      <nav-bar :items="navBarItems" />
      <b-container>
         <Home />
         <!-- <About />
         <Projects />
         <Contact /> -->
      </b-container>
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
         navBarItems: ["Home, About, Projects, Contact"]
      }
   }
}
</script>

<style lang="scss" scoped>

</style>