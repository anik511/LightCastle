<template>
  <section-slot>
    <template v-slot:title>
      <h1>Latest at LightCastle</h1>
    </template>
    <template v-slot:button>
      <b-button variant="outline-dark"
        >See All Update <b-icon class="arrow-icon" icon="arrow-right"></b-icon
      ></b-button>
    </template>
    <template>
      <LatestCard v-for="lat in latest" :key="lat.id" :latest="lat"
    /></template>
  </section-slot>
</template>

<script>
import { mapState } from "vuex";
import LatestCard from "./LatestComponent/LatestCard.vue";
export default {
  components: { LatestCard },
  name: "Latest",
  computed: mapState(["latest"]),
};
</script>

<style scoped>
@media only screen and (max-width: 1025px) {
  .featured h1 {
    font-size: 4rem;
  }
}
</style>
