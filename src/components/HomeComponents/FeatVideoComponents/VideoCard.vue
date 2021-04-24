<template>
  <b-col class="col" cols="12" sm="12" md="6" lg="3">
    <div class="card">
      <b-embed
        type="iframe"
        aspect="16by9"
        :src="video.video"
        allowfullscreen
      ></b-embed>
      <div class="card-contant">
        <h3>{{ video.title }}</h3>
        <p>{{ video.contant }}</p>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "VideoCard",
  props: ["video"],
};
</script>

<style scoped>
.embed-responsive {
  height: 23rem;
}
.card-contant {
  padding: 2rem 2rem;
}
.card-contant h3 {
  font-size: 2.4rem;
  font-weight: 700;
  color: #2e2a2a;
  padding-bottom: 2rem;
}
.card-contant p {
  font-size: 1.4rem;
  color: #2e2a2a;
}
</style>
