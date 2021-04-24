<template>
  <div class="featured">
    <b-container>
      <b-row>
        <h1 class="arek-jhamela">Event Countdown Banner</h1>
        <b-col cols="12" sm="12" md="12" lg="6">
          <div class="register-bg">
            <h3>Register for Early Access</h3>
            <b-input-group size="lg" class="mt-3">
              <b-form-input placeholder="Your Email"></b-form-input>
              <b-input-group-append>
                <b-button variant="primary">Subscribe</b-button>
              </b-input-group-append>
            </b-input-group>
          </div></b-col
        >
        <b-col cols="12" sm="12" md="12" lg="6">
          <div class="timer">
            <h3>Event Launch in</h3>
            <Countdown end="August 22, 2021"></Countdown>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Countdown from "vuejs-countdown";
export default {
  name: "CountDown",
  components: { Countdown },
};
</script>

<style scoped>
h1 {
  font-size: 4.8rem;
  font-weight: 700;
  color: #2e2a2a;
  margin-bottom: 3rem;
  padding-left: 1.3rem;
}
.register-bg {
  background: linear-gradient(#0a0d5ecc, #352d74cc),
    url("../../assets/Rectangle 115.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  /* height: 75.375rem; */
  position: relative;
  padding: 15rem 5rem 20rem 5rem;
}
.register-bg h3 {
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 3rem;
}
.form-control {
  padding: 2.5rem 1rem !important;
  font-size: 1.6rem;
  border: 1px solid #0ccbfd;
}
.form-control::placeholder {
  color: #6aaed8;
}
.btn {
  padding: 0 4rem !important;
  font-size: 1.6rem;
  font-weight: 700;
}

/* countdown */
.timer {
  padding: 17.2rem 6.6rem;
}
.timer h3 {
  font-size: 2.4rem;
  font-weight: 700;
  color: #2e2a2a;
  text-align: center;
  margin-bottom: 3rem;
}
.vuejs-countdown li .digit {
  font-size: 3rem !important;
  font-weight: 700 !important;
  color: #00568b !important;
}
.vuejs-countdown li::after {
  content: none !important;
}
@media only screen and (max-width: 480px) {
  .register-bg .input-group-lg .input-group-append .btn {
    font-size: 2rem;
  }
  .btn {
    padding: 0 2rem !important;
  }
}
@media only screen and (max-width: 375px) {
  .register-bg {
    padding: 10rem 2rem 10rem 2rem !important;
  }
  .btn {
    padding: 0 0.6rem !important;
  }
}
</style>
