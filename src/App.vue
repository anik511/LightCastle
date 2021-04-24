<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      abouts: [
        {
          id: 1,
          number: 150,
          img: require("@/assets/Group 1186.png"),
          contant: "Corporations & Development Partners consulted",
        },
        {
          id: 2,
          number: 300,
          img: require("@/assets/Group 1191.png"),
          contant: "SMEs & Startups collaborated",
        },
        {
          id: 3,
          number: 25,
          img: require("@/assets/Group 1193.png"),
          contant: "Accelerator Programs supported",
        },
      ],
      markets: [
        {
          id: 1,
          title: "MARKET INSIGHT",
          img: require("@/assets/Mask Group 2.png"),
          contant:
            "Fading Abroad while Shining at Home: Bangladesh’s Shrimp Sector Looks to the Domestic Market as Exports Decline",
        },
        {
          id: 2,
          title: "MARKET INSIGHT",
          img: require("@/assets/Mask Group 3.png"),
          contant:
            "Telemedicine for Bangladesh: Bridging the Doctor-Patient Gap",
        },
        {
          id: 3,
          title: "MARKET INSIGHT",
          img: require("@/assets/Mask Group 4.png"),
          contant:
            "Thick Hides .. But For How Long? – Struggles of the Bangladesh Leather Industry",
        },
        {
          id: 4,
          title: "MARKET INSIGHT",
          img: require("@/assets/Mask Group 5.png"),
          contant:
            "How has the Covid 19 Pandemic Impacted the Fisheries Sector?",
        },
      ],
      videos: [
        {
          id: 1,
          title: "Video Title",
          video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
          contant:
            "A short description about the video A short description about the video A short description about the video A short description about the video.",
        },
        {
          id: 2,
          title: "Video Title",
          video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
          contant:
            "A short description about the video A short description about the video A short description about the video A short description about the video.",
        },
        {
          id: 3,
          title: "Video Title",
          video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
          contant:
            "A short description about the video A short description about the video A short description about the video A short description about the video.",
        },
        {
          id: 4,
          title: "Video Title",
          video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
          contant:
            "A short description about the video A short description about the video A short description about the video A short description about the video.",
        },
      ],
      latest: [
        {
          id: 1,
          date: "Aug 16, 2020",
          img: require("@/assets/Mask Group 20.png"),
          contant: "Bijon Islam joins as Board Member of TiE Dhaka",
        },
        {
          id: 2,
          date: "Aug 16, 2020",
          img: require("@/assets/Mask Group 21.png"),
          contant:
            "LightCastle brings Founder Institute Bangladesh Virtual 2020 Pre-seed Accelerator",
        },
        {
          id: 3,
          date: "Aug 16, 2020",
          img: require("@/assets/Mask Group 22.png"),
          contant:
            "LightCastle Partners signs Agreement with BRAC to analyze the impact of BRAC’s IDP Projects",
        },
        {
          id: 4,
          date: "Aug 16, 2020",
          img: require("@/assets/Mask Group 23.png"),
          contant:
            "LightCastle Partners signs Agreement with RTI International for “ Bangladesh Sanitation Stakeholder Mapping ” Project",
        },
      ],
      clients: [
        {
          id: 1,
          img: require("@/assets/Mask Group 11.png"),
        },
        {
          id: 2,
          img: require("@/assets/Mask Group 12.png"),
        },
        {
          id: 3,
          img: require("@/assets/Mask Group 13.png"),
        },
        {
          id: 4,
          img: require("@/assets/Mask Group 14.png"),
        },
        {
          id: 5,
          img: require("@/assets/Mask Group 15.png"),
        },
        {
          id: 6,
          img: require("@/assets/Mask Group 11.png"),
        },
        {
          id: 7,
          img: require("@/assets/Mask Group 12.png"),
        },
        {
          id: 8,
          img: require("@/assets/Mask Group 13.png"),
        },
        {
          id: 9,
          img: require("@/assets/Mask Group 14.png"),
        },
        {
          id: 10,
          img: require("@/assets/Mask Group 15.png"),
        },
      ],
      testimonials: [
        {
          id: 1,
          name: "Client's Name",
          des: "Designation",
          img: require("@/assets/Mask Group 23.png"),
          contant:
            "A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done so far.",
        },
        {
          id: 2,
          name: "Client's Name",
          des: "Designation",
          img: require("@/assets/Mask Group 23.png"),
          contant:
            "A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done so far.",
        },
        {
          id: 3,
          name: "Client's Name",
          des: "Designation",
          img: require("@/assets/Mask Group 23.png"),
          contant:
            "A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done so far.",
        },
        {
          id: 4,
          name: "Client's Name",
          des: "Designation",
          img: require("@/assets/Mask Group 23.png"),
          contant:
            "A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done so far.",
        },
        {
          id: 5,
          name: "Client's Name",
          des: "Designation",
          img: require("@/assets/Mask Group 23.png"),
          contant:
            "A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done so far.",
        },
      ],
    };
  },
  created() {
    this.$store.dispatch("addAboutData", this.abouts);
    this.$store.dispatch("addMarketData", this.markets);
    this.$store.dispatch("addVideos", this.videos);
    this.$store.dispatch("addLatest", this.latest);
    this.$store.dispatch("addClients", this.clients);
    this.$store.dispatch("addTestimonials", this.testimonials);
  },
};
</script>

<style>
/* vendors css */
@import "./assets/css/normalize.css";
/* @import "./assets/css/bootstrap.css"; */
/* vendors css */

/* responsive css */
@import "./assets/css/responsive.css";
/* responsive css */

/* fonts */
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700&display=swap");
/* fonts */
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
ul li {
  list-style-type: none;
}

a {
  text-decoration: none;
}
/* 
h1 {
  font-size: 4.2rem;
} */
body {
  font-family: "Mulish", sans-serif !important;
}
/* all card shadow */
.card {
  box-shadow: 0 0px 0px 0 rgb(0, 0, 0, 20%), 0 0px 8px 0 rgb(0, 0, 0, 19%);
  transition: 0.5s;
}
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

/* all section top */
.featured {
  padding-top: 5rem;
  padding-bottom: 10rem;
}
.featured-top {
  margin-bottom: 5rem;
}
.featured h1 {
  font-size: 4.8rem;
  font-weight: 700;
}
.featured .right {
  display: inline-block;
  margin-top: 1rem;
  float: right;
}
.featured .right .btn-outline-dark {
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1.6rem;
  color: #00568b;
  border-color: #0073bb;
  transition: 0.6s;
}
.featured .right .btn-outline-dark:hover {
  color: #ffffff;
  border-color: #ffffff;
  background-color: #0073bb;
}
</style>
