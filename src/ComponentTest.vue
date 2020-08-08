<template>
<div id="app">
   <main>
      <img alt="Vue logo" src="./assets/logo.png">
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   </main>
   <b-container id="tests">
      <section id="navdot" class="m-4">
         <h4 class="text-center">&lt;navdot&gt;</h4>
         <b-row class="justify-content-center">
            <b-button variant="primary" 
                      size="md"
                      class="m-1" 
                      @click="radius += 0.05">Increase Radius</b-button>
            <b-button variant="primary"
                      size="md"
                      class="m-1" 
                      @click="radius -= 0.05">Decrease Radius</b-button>
         </b-row>
         <b-row class="justify-content-center m-4">
            <div @mouseover="hover=true" @mouseleave="hover=false">
               <navdot :radius="radius"
                       :expand="hover"
                       color="#ff7e7e" />
            </div>
         </b-row>
      </section>
      <section id="navbar-item" class="m-4">
         <h4 class="text-center">&lt;navbar-item&gt;</h4>
         <b-row class="justify-content-center">
            <navbar-item :hovered="hover" 
                         :hover-color="hoverColor" 
                         :base-color="baseColor">Test</navbar-item>
                         <!-- Child text sometimes breaks navdot proportions -->
         </b-row>
      </section>
      <section id="mult-navbar-items" class="m-4">
         <h4 class="text-center">multiple &lt;navbar-item&gt;</h4>
         <b-row class="justify-content-center" >
            <ul>
               <navbar-item v-for="item in navBarContent"
                            :key="item.id"
                            :hovered="hover">{{ item.text }}</navbar-item>
            </ul>
         </b-row>
      </section>
      <section id="work-test-delete-later" class="m-4">
         <h4 class="text-center">responsive &lt;b-table&gt;</h4>
         <b-table hover responsive :items="items" :fields="fields" />
      </section>
      <section id="navbar" class="m-4">

      </section>
  </b-container>
</div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld'
import Navdot from '@/components/Navbar/Navdot'
import NavbarItem from '@/components/Navbar/NavbarItem'

export default {
  name: 'App',
  data: function() {
    return { 
      hover: false,
      radius: 0.5,
      hoverColor: "#ff7e7e",
      baseColor: "#000000",
      navBarContent: [
        { id: 0, text: "Hello" },
        { id: 1, text: "World" },
        { id: 2, text: "Test" },
        { id: 3, text: "Me" }
      ],
      fields: [
         "a", 
         {
            key: "b", 
            stickyColumn: true
         }, 
         "c", "d", "e", "f", "g", "h"
      ],
      items: [
         {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8},
         {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8},
         {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8},
         {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8},
         {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8},
         {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8},
         {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8},
         {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8},
         {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8},
         {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8},
      ]
    }
  },
  components: {
    // HelloWorld, 
    Navdot,
    NavbarItem
  }
}
</script>

<style lang="scss">
main {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

section {
  border: {
    style: solid;
    width: .5em;
    color: rgb(37, 122, 37);
  }
}

</style>
