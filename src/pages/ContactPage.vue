<template>
   <b-container class="mb-5">
      <b-row>
         <b-col id="contact-message" class="section-heading" cols="6">
            <h3>Always open to talk.</h3>
            <h3 class="plain">Contact me 
               <a id="email" href="mailto:tyler.n.kang@outlook.com" target="_blank">Here.</a>
            </h3>
         </b-col>
         <b-col cols="6">
            <a class="d-block" v-for="link of links" :key="link.key" :href="link.key"> 
               {{ link.key }}: {{ link.value }}
            </a>
         </b-col>
      </b-row>
      <b-row>
      </b-row>
   </b-container>
</template>

<script>
export default {
   name: "ContactPage",
   data: function() {
      return {
         links: [
            { key: "Email", value: "tyler.n.kang@outlook.com" }
         ]
      }
   }
}
</script>

<style lang="scss" scoped>

.plain {
   color: white;
}

a {
   color: inherit;
   text-decoration: none;

   &:hover {
      color: inherit;
      text-decoration: none;
   }
}

#email {
   border-bottom: 5px dashed;
}

#contact-message {
   border-right: 3px solid rgba(white, 0.3);
}

</style>