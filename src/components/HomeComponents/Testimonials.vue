<template>
  <div class="service">
    <b-container>
      <b-row>
        <h1 class="jhamela">Testimonials</h1>
        <TestimoCarousel />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TestimoCarousel from "./TestimonialsComponents/TestimoCarousel.vue";
export default {
  components: { TestimoCarousel },
  name: "Testimonials",
};
</script>

<style scoped>
.service {
  padding-top: 10rem;
  padding-bottom: 10rem;
}
.service h1 {
  font-size: 4.8rem;
  font-weight: 700;
  margin-bottom: 8rem;
}

@media only screen and (max-width: 767px) {
  .col-sm-8-nw {
    max-width: 99.666667% !important;
  }
}
@media only screen and (max-width: 576px) {
  .col-sm-8-nw {
    max-width: 99.666667% !important;
  }
  .service h1 {
    margin-left: 16.5rem !important;
  }
}
@media only screen and (max-width: 480px) {
  .service h1 {
    margin-left: 16.5rem !important;
    margin-bottom: 0 !important;
  }
  /* testimonial code starts*/
  #quote-carousel .carousel-indicators {
    margin-left: 11rem !important;
  }
  /* testimonial code ends*/
}
@media only screen and (max-width: 375px) {
  .service h1 {
    margin-left: 3.5rem;
  }
}
</style>
