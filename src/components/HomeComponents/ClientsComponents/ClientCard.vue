<template>
  <VueSlickCarousel class="crsl" v-bind="settings">
    <b-col
      v-for="client in clients"
      :key="client.id"
      cols="6"
      sm="4"
      md="3"
      lg="2"
    >
      <img :src="client.img" alt="" />
    </b-col>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import { mapState } from "vuex";
export default {
  name: "ClientCard",
  components: { VueSlickCarousel },
  computed: mapState(["clients"]),
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
            },
          },
          {
            breakpoint: 475,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      },
    };
  },
  created() {},
};
</script>

<style scoped>
@import "../../../../node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css";
@import "../../../../node_modules/vue-slick-carousel/dist/vue-slick-carousel.css";

.crsl {
  display: flex;
  width: 100%;
}
</style>
