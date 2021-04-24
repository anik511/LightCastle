<template>
  <div class="home"><HeroMain /><LastHero /></div>
</template>

<script>
import HeroMain from "@/components/HomeComponents/Hero/HeroMain.vue";
import LastHero from "@/components/HomeComponents//Hero/LastHero.vue";
export default {
  name: "HeroContainer",
  components: {
    HeroMain,
    LastHero,
  },
};
</script>

<style scoped>
/* Home Hero  code starts*/
.home {
  background: linear-gradient(#0a0d5ecc, #352d74cc),
    url("../../assets/Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  /* height: 120.6vh; */
  /* height: 75.375rem; */
  position: relative;
  color: #fff;
}
/* Home Hero  code ends*/
</style>
