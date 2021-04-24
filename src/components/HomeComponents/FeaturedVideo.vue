<template>
  <section-slot>
    <template v-slot:title>
      <h1>Featured Videos</h1>
    </template>
    <template v-slot:button>
      <b-button variant="outline-dark"
        >View All Videos <b-icon class="arrow-icon" icon="arrow-right"></b-icon
      ></b-button>
    </template>
    <template>
      <VideoCard v-for="video in videos" :key="video.id" :video="video" />
    </template>
  </section-slot>
</template>

<script>
import { mapState } from "vuex";
import VideoCard from "./FeatVideoComponents/VideoCard.vue";
export default {
  components: { VideoCard },
  name: "FeaturedVideo",
  computed: mapState(["videos"]),
};
</script>

<style scoped></style>
