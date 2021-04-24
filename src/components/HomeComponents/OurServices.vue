<template>
  <div class="service">
    <b-container>
      <b-row
        ><div class="new-width">
          <h1>Our Services</h1>
          <ul class="service-tab">
            <li
              :class="active === 1 ? 'activate' : ''"
              @click="makeActive(1, 'StrategyDigital')"
            >
              <router-link active :to="{ name: 'StrategyDigital' }"
                >Strategy Consulting</router-link
              >
            </li>
            <li
              :class="active === 2 ? 'activate' : ''"
              @click="makeActive(2, 'StrategyConsult')"
            >
              <router-link :to="{ name: 'StrategyConsult' }"
                >Entrepreneurship Ecosystem</router-link
              >
            </li>
            <li
              :class="active === 3 ? 'activate' : ''"
              @click="makeActive(3, 'StrategyDigital')"
            >
              <router-link :to="{ name: 'StrategyDigital' }"
                >Digital</router-link
              >
            </li>
          </ul>
          <router-view></router-view>
        </div> </b-row
    ></b-container>
  </div>
</template>

<script>
export default {
  name: "OurServices",
  data() {
    return {
      active: 1,
    };
  },
  created() {
    this.$router.push({ name: "StrategyDigital" });
  },
  methods: {
    makeActive(id, way) {
      console.log(id);
      this.active = id;
      this.$router.push({ name: way });
    },
  },
};
</script>

<style scoped>
.service {
  padding-top: 10rem;
  padding-bottom: 10rem;
}
.service div h1 {
  font-size: 4.8rem;
  font-weight: 700;
}
.service-tab {
  display: flex;
  font-size: 1.8rem;
  font-weight: 700;
}
.service-tab li {
  padding: 2rem 3rem;
  transition: 0.5s;
}
.service-tab li::after {
  content: "";
  display: block;
  height: 0.3rem;
  background: #0000001f;
  width: 100%;
  margin: auto;
  margin-top: 1rem;
  /* position: absolute; */
  transition: all 0.3s ease 0s;
  -webkit-transition: all 0.3s ease 0s;
}
.service-tab li:hover:after {
  background: #0073bb;
}
.activate::after {
  background: #0073bb !important;
}
.service-tab li a {
  text-decoration: none;
  cursor: pointer;
  color: #707070;
}
</style>
