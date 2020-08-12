<template>
<div id="app">
   <main>
      <img alt="Vue logo" src="./assets/logo.png">
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   </main>
   <b-container id="tests">
      <section id="navdot" class="m-4">
         <h4 class="text-center">&lt;navdot&gt;</h4>
         <b-row class="m-4">
            <b-col class="text-center">
               <span @mouseover="hover=true" @mouseleave="hover=false">
                  <navdot :radius="radius"
                          :expand="hover"
                          :style="{opacity: .8}" 
                          color="#ffffff" />
                          <!-- opacity works from parent component -->
               </span>
            </b-col>
         </b-row>
      </section>
      <section id="navbar-item" class="m-4">
         <h4 class="text-center">&lt;navbar-item&gt;</h4>
         <b-row>
            <b-col class="text-center">
               <navbar-item :hovered="hover" 
                            :hover-color="hoverColor" 
                            :base-color="baseColor"
                            class="new-line">Test</navbar-item>
                            <!-- Child text sometimes breaks navdot proportions -->
            </b-col>
         </b-row>
      </section>
      <section id="mult-navbar-items" class="m-4">
         <h4 class="text-center">multiple &lt;navbar-item&gt;</h4>
         <b-row>
            <b-col class="text-center">
               <ul class="d-inline-flex flex-column">
                  <navbar-item v-for="item in navBarContent"
                               :key="item.id"
                               :hovered="hover">{{ item.text }}</navbar-item>
               </ul>
            </b-col>
         </b-row>
      </section>
      <section id="navbar" class="m-4">
         <h4 class="text-center">&lt;navbar&gt;</h4> 
         <b-row>
            <b-col class="text-center">
               <navbar :items="navBarContent.map(item => item.text)" />
            </b-col>
         </b-row>
      </section>
  </b-container>
</div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld'
import Navdot from '@/components/Navbar/Navdot'
import NavbarItem from '@/components/Navbar/NavbarItem'
import Navbar from '@/components/Navbar/Navbar'

export default {
   name: 'App',
   components: {
      // HelloWorld, 
      Navdot,
      NavbarItem,
      Navbar
   },
  data: function() {
    return {
      hover: false,
      radius: 0.5,
      navBarContent: [
        { id: 0, text: "Home" },
        { id: 1, text: "About" },
        { id: 2, text: "Projects" },
        { id: 3, text: "Contact" },
        { id: 4, text: "Resume"}
      ],

    }
  },
}
</script>

<style lang="scss">

main {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h4 {
   color: #ffffff;
}

section {
  border: {
    style: solid;
    width: .5em;
    color: rgb(37, 122, 37);
  }
   background-color: #131214;

}

</style>
