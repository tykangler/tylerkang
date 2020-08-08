<template>
   <nav id="navbar">
      <ul>
         <slot/>
      </ul>
   </nav>
</template>

<script>
import NavbarItem from "NavbarItem"

export default {
   name: "Navbar",
   components: {
      NavbarItem
   }
}
</script>

<style lang="scss" scoped>

#navbar {
   display: inline-block;
}

</style>