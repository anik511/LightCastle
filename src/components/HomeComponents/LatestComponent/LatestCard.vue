<template>
  <b-col cols="12" sm="12" md="6" lg="6">
    <div class="latest-card">
      <img :src="latest.img" alt="" />
      <div class="latest-content">
        <p>{{ latest.date }}</p>
        <h3>{{ latest.contant }}</h3>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "LatestCard",
  props: ["latest"],
};
</script>

<style scoped>
.latest-card {
  display: flex;
  margin-bottom: 2rem;
  box-shadow: 0 0px 0px 0 rgb(0, 0, 0, 20%), 0 0px 8px 0 rgb(0, 0, 0, 19%);
  transition: 0.5s;
}
.latest-card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.latest-content {
  padding: 2rem;
}
.latest-content p {
  font-size: 1.6rem;
  color: #706b67;
}
.latest-content h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #241c15;
}
@media only screen and (max-width: 1025px) {
  .latest-card {
    height: 90%;
  }
}
</style>
