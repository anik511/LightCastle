<template>
  <b-col class="about-card" cols="12" sm="12" md="6" lg="6">
    <b-card-group deck>
      <AboutCard v-for="about in abouts" :key="about.id" :about="about"
    /></b-card-group>
  </b-col>
</template>

<script>
import { mapState } from "vuex";
import AboutCard from "@/components/HomeComponents/AboutComponent/AboutCard.vue";
export default {
  name: "CardContainer",
  components: { AboutCard },
  computed: mapState(["abouts"]),
};
</script>

<style scoped></style>
