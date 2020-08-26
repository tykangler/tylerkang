<template>
   <b-container class="page">
      <b-row>
         <b-col class="section-heading highlight">
            <span class="d-block highlight">Analytically minded,</span> Creative at Heart
         </b-col>
      </b-row>
      <hr class="divider my-5">
      <b-row>
         <b-col>
            <p class="section-content">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum tempor maximus. 
               Suspendisse potenti. Nulla justo velit, pretium vitae urna ac, 
               blandit aliquet lacus. Nulla pharetra, enim quis imperdiet suscipit, 
               purus risus consectetur libero, sit amet bibendum ipsum magna in eros. 
               Mauris sollicitudin lectus urna, sollicitudin ultrices nisl ullamcorper sit amet. 
               Cras porta leo et est laoreet rhoncus. Cras non nisi eu leo convallis pharetra 
               vitae quis diam.
            </p>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
export default {
   name: "AboutPage",
}
</script>

<style lang="scss" scoped>

.divider {
   transform: translateX(-30px);
   height: 3px;
   border-radius: 10px 10px 10px 10px;
   background-color: rgb(216, 216, 216);
}

.section-content {
   margin-left: 70px;
}

</style>