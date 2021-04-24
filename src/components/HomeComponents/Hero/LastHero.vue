<template>
  <b-container>
    <b-row>
      <b-col
        v-for="(text, index) in texts"
        :key="index"
        class="hero-last h2"
        cols="12"
        sm="12"
        md="4"
        lg="4"
        :class="active === index ? 'active' : ''"
        @click="makeActive(index)"
      >
        <h2>{{ text }}</h2>
        <b-icon class="arrow-icon" icon="arrow-right" scale="2"></b-icon>
      </b-col>
      <!-- <b-col class="hero-last" cols="12" sm="12" md="4" lg="4">
        2
      </b-col>
      <b-col class="hero-last" cols="12" sm="12" md="4" lg="4">
        3
      </b-col> -->
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "LastHero",
  data() {
    return {
      texts: ["Our Services", "Featured Insights", "Clients"],
      active: null,
    };
  },
  methods: {
    makeActive(index) {
      this.active = index;
    },
  },
};
</script>

<style scoped>
.hero-last {
  color: black;
  background-color: #fff;
  border-bottom: 0.25rem dashed #0073bb;
  border-top: 1px solid rgb(169, 169, 169);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 3rem 2rem;
  margin: 0;
  transition: 0.4s;
}
.active {
  color: #fff;
  background-color: #0073bb;
  border-color: #0073bb !important;
}
.hero-last:hover {
  color: #fff;
  background-color: #0073bb;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.row .hero-last:first-child,
.row .hero-last:last-child {
  border-left: 1px solid rgb(169, 169, 169);
  border-right: 1px solid rgb(169, 169, 169);
}

.hero-last h2 {
  font-weight: bolder;
  margin-bottom: 3rem;
}

.arrow-icon {
  float: right;
}
</style>
