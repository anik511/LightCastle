<template>
  <b-col cols="12" sm="12" md="12" lg="6">
    <div class="startup">
      <div class="starup-contant">
        <h4>ENTREPRENEURSHIP</h4>
        <h3>
          Bangladesh Startup Ecosystem- The Untapped Digital Goldmine of Asia
        </h3>
        <p>
          Bangladesh’s Startup Ecosystem has experienced incredible growth since
          its journey began in the early 2010s. With over USD 200 million in
          investments, 1000+ startups have..
        </p>
        <h3>
          <a href="#"
            >Read More
            <b-icon class="arrow-icon" icon="arrow-right" scale="1"></b-icon
          ></a>
        </h3>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "StartUp",
};
</script>

<style scoped>
.startup {
  /* background: linear-gradient(#0a0d5ecc, #352d74cc),
    url("../../../assets/Image 1.png"); */
  background: url("../../../assets/Image 1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  /* height: 120.6vh; */
  /* height: 75.375rem; */
  position: relative;
  color: #fff;
  padding: 30.2rem 2.5rem 5.5rem 2.5rem;
  /* height: 70vh; */
}
.starup-contant {
  background-color: #fff;
  padding: 2.5rem;
}
.starup-contant h4 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #e47735;
}
.starup-contant h3 {
  font-size: 2.4rem;
  font-weight: 700;
  color: #241c15;
}
.starup-contant p {
  font-size: 1.6rem;
  color: #241c15;
}
.starup-contant h3 a {
  font-size: 1.6rem;
  color: #241c15;
  font-weight: 700;
}
</style>
