<template>
  <b-card :img-src="about.img" img-alt="Card image" img-top>
    <b-card-text>
      <h2>{{ about.number }}+</h2>
      <p>{{ about.contant }}</p>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "AboutCard",
  props: ["about"],
  data() {
    return {
      // img: require("@/assets/Group 1186.png"),
    };
  },
};
</script>

<style scoped>
.card img {
  width: 100%;
  padding: 0.5rem 3rem;
}
.card-text {
  text-align: center;
}
.card-text h2 {
  font-size: 3.6rem;
  font-weight: 800;
}
.card-text p {
  font-size: 1.4rem;
  font-weight: 500;
}
.card-deck .card {
  padding: 1.5rem 1rem 1rem 1rem;
  margin-left: 2rem;
}
.card-deck .card:first-child,
.card-deck .card:last-child {
  margin-right: 0 !important;
  margin-left: 0.5rem !important;
}
.card-deck .card .card-body {
  padding: 0;
  padding-top: 1rem;
}
</style>
