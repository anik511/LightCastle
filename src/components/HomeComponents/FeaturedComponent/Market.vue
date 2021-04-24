<template>
  <b-col class="col" cols="12" sm="12" md="12" lg="6">
    <div v-for="market in markets" :key="market.id" class="market">
      <img :src="market.img" alt="" />
      <div class="market-contant">
        <h4>{{ market.title }}</h4>
        <p>{{ market.contant }}</p>
      </div>
    </div>
  </b-col>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Market",
  computed: mapState(["markets"]),
};
</script>

<style scoped>
.market {
  display: flex;
  margin-bottom: 2rem;
  box-shadow: 0 0px 0px 0 rgb(0, 0, 0, 20%), 0 0px 8px 0 rgb(0, 0, 0, 19%);
  transition: 0.5s;
}
.col .market:last-child {
  margin-bottom: 0 !important;
}
.market:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.market-contant {
  padding: 2rem 2rem;
}
.market-contant h4 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #e47735;
  margin-bottom: 1rem;
}
.market-contant p {
  font-size: 1.8rem;
  font-weight: 700;
  color: #241c15;
}
</style>
