<template>
  <b-container>
    <b-row>
      <b-col class="hero-flex" cols="12" sm="12" md="12" lg="12">
        <div class="hero">
          <h1>
            <b>Bangladesh's Stimulus Packages</b> Can it stand against Covid-19?
          </h1>
          <div class="buttons">
            <b-button variant="primary">Read Article</b-button>
            <b-button variant="outline-dark">Covid-19 Series</b-button>
          </div>
        </div>
        <img src="../../../assets/Report Mockup.png" alt="" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "HeroMain",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-flex {
  display: flex;
  padding: 10rem 0;
}
.hero {
  padding-right: 21rem;
}
.hero h1 {
  font-size: 4.8rem;
}
.buttons {
  margin-top: 5rem;
}
.buttons .btn {
  padding: 0.4rem 2rem;
  font-weight: 600;
  font-size: 1.6rem;
  border-radius: 0;
}
.buttons .btn:last-child {
  margin-left: 2rem;
}
.buttons .btn-outline-dark {
  color: #ffffff;
  border-color: #ffffff;
  transition: 0.4s;
}
.buttons .btn-outline-dark:hover {
  color: #000000;
  border-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.556);
}
.hero-flex img {
  width: 40%;
}
</style>
