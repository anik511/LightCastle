<template>
  <section-slot>
    <template v-slot:title>
      <h1>Featured Insights</h1>
    </template>
    <template v-slot:button>
      <b-button variant="outline-dark"
        >View All Insights
        <b-icon class="arrow-icon" icon="arrow-right"></b-icon
      ></b-button>
    </template>
    <template>
      <StartUp />
    </template>
    <template v-slot:contant-1>
      <Market />
    </template>
  </section-slot>
</template>

<script>
import Market from "./FeaturedComponent/Market.vue";
import StartUp from "./FeaturedComponent/StartUp.vue";
export default {
  components: { StartUp, Market },
  name: "Featured",
};
</script>

<style scoped></style>
