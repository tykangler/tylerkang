<template>
   <nav class="navbar" :style="{ height: containerHeight }">
      <hr class="line d-inline-block" :style="lineStyle">
      <div class="d-inline-flex flex-column nav-items">
         <navbar-item v-for="item of items"
                      class="mb-2"
                      :key="item">
            <span class="text-uppercase highlight">{{ item }}</span>
         </navbar-item>
      </div>
   </nav>
</template>

<script>
import NavbarItem from "./NavbarItem"

export default {
   name: "Navbar",
   components: {
      NavbarItem
   },
   data: function() {
      return {
         containerHeight: this.items.length * 4 + 'em'
      }
   },
   props: {
      items: {
         type: Array,
         required: true,
      },
   },
   computed: {
      lineStyle: function() {
         return {
            opacity: 0.85,
            height: this.containerHeight
         }
      },
   }
}
</script>

<style lang="scss" scoped>
.navbar {
   display: inline-block;
   position: relative;
   padding: 0;
}

.line {
   position: absolute;
   left: 7px;
   margin: 0;
   background-color: rgb(236, 236, 236);
   border-radius: 12px 12px 12px 12px;
   width: .12rem;
   z-index: 1;
}

.nav-items {
   position: absolute;
   top: 1.5em;
   z-index: 2;
}

</style>