<template>
  <div>
    <HeroContainer />
    <About />
    <OurServices />
    <Clients />
    <Featured />
    <FeaturedVideo />
    <Testimonials />
    <CountDown />
    <Latest />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroContainer from "@/components/HomeComponents/HeroContainer.vue";
import About from "@/components/HomeComponents/About.vue";
import OurServices from "../components/HomeComponents/OurServices.vue";
import Clients from "../components/HomeComponents/Clients.vue";
import Featured from "../components/HomeComponents/Featured.vue";
import FeaturedVideo from "../components/HomeComponents/FeaturedVideo.vue";
import Latest from "../components/HomeComponents/Latest.vue";
import CountDown from "../components/HomeComponents/CountDown.vue";
import Testimonials from "../components/HomeComponents/Testimonials.vue";

export default {
  name: "Home",
  components: {
    HeroContainer,
    About,
    OurServices,
    Clients,
    Featured,
    FeaturedVideo,
    Latest,
    CountDown,
    Testimonials,
  },
};
</script>
<style scoped></style>
