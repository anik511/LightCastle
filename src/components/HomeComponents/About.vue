<template
  ><div class="about">
    <b-container>
      <b-row> <AboutContent /> <CardContainer /></b-row
    ></b-container>
  </div>
</template>

<script>
import AboutContent from "@/components/HomeComponents/AboutComponent/AboutContent.vue";
import CardContainer from "@/components/HomeComponents/AboutComponent/CardContainer.vue";
export default {
  components: { AboutContent, CardContainer },
  name: "About",
};
</script>

<style scoped>
.about {
  padding-top: 15rem;
  padding-bottom: 5rem;
}
</style>
