<template>
   <b-container class="page">
      <div style="height: 300px;" />
      <b-row>
         <b-col id="contact-message" class="section-heading" md="6" cols="12">
            <h3>I'm bored, and I need a job.</h3>
            <h3 class="plain">Contact me 
               <a id="email" href="mailto:tyler.n.kang@outlook.com" target="_blank">Here.</a>
            </h3>
         </b-col>
         <b-col id="contact-links" md="6" cols="12">
            <a class="d-block ml-5 mb-2" v-for="link of links" :key="link.key" :href="link.href"> 
               {{ link.key }}: {{ link.value }}
            </a>
         </b-col>
      </b-row>
      <div style="height: 100px;" />
   </b-container>
</template>

<script>
export default {
   name: "ContactPage",
   data: function() {
      return {
         links: [
            { 
               key: "Email", 
               value: "tyler.n.kang@outlook.com", 
               href: "mailto: tyler.n.kang@outlook.com" 
            },
            {
               key: "Phone",
               value: "425-314-2399"
            }
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

.page {
   margin-bottom: 0;
}

</style>