<template>
  <b-col cols="12" sm="12" md="12" lg="12">
    <div class="carousel slide" data-ride="carousel" id="quote-carousel">
      <!-- Bottom Carousel Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#quote-carousel" data-slide-to="0" class="active">
          <img
            class="img-responsive "
            src="../../../assets/Mask Group 9.png"
            alt=""
          />
        </li>
        <li data-target="#quote-carousel" data-slide-to="1">
          <img
            class="img-responsive"
            src="../../../assets/Mask Group 8.png"
            alt=""
          />
        </li>
        <li data-target="#quote-carousel" data-slide-to="2">
          <img
            class="img-responsive"
            src="../../../assets/Mask Group 6.png"
            alt=""
          />
        </li>
        <li data-target="#quote-carousel" data-slide-to="2">
          <img
            class="img-responsive"
            src="../../../assets/Mask Group 7.png"
            alt=""
          />
        </li>
        <li data-target="#quote-carousel" data-slide-to="2">
          <img
            class="img-responsive"
            src="../../../assets/Mask Group 10.png"
            alt=""
          />
        </li>
      </ol>

      <!-- Carousel Slides / Quotes -->
      <div class="carousel-inner text-center">
        <!-- Quote 1 -->
        <div class="item active">
          <blockquote>
            <div class="row">
              <div class="col-sm-8 col-sm-8-nw col-sm-offset-2">
                <h2>Client's Name</h2>
                <h3>Designation</h3>
                <p>
                  A short note about lcp and the projects done so far A short
                  note about lcp and the projects done so far A short note about
                  lcp and the projects done so far A short note about lcp and
                  the projects done so far.
                </p>
              </div>
            </div>
          </blockquote>
        </div>
        <!-- Quote 2 -->
        <div class="item">
          <blockquote>
            <div class="row">
              <div class="col-sm-8 col-sm-8-nw col-sm-offset-2">
                <h2>Client's Name</h2>
                <h3>Designation</h3>
                <p>
                  A short note about lcp and the projects done so far A short
                  note about lcp and the projects done so far A short note about
                  lcp and the projects done so far A short note about lcp and
                  the projects done so far.
                </p>
              </div>
            </div>
          </blockquote>
        </div>

        <div class="item">
          <blockquote>
            <div class="row">
              <div class="col-sm-8 col-sm-8-nw col-sm-offset-2">
                <h2>Client's Name</h2>
                <h3>Designation</h3>
                <p>
                  A short note about lcp and the projects done so far A short
                  note about lcp and the projects done so far A short note about
                  lcp and the projects done so far A short note about lcp and
                  the projects done so far.
                </p>
              </div>
            </div>
          </blockquote>
        </div>
        <div class="item">
          <blockquote>
            <div class="row">
              <div class="col-sm-8 col-sm-8-nw col-sm-offset-2">
                <h2>Client's Name</h2>
                <h3>Designation</h3>
                <p>
                  A short note about lcp and the projects done so far A short
                  note about lcp and the projects done so far A short note about
                  lcp and the projects done so far A short note about lcp and
                  the projects done so far.
                </p>
              </div>
            </div>
          </blockquote>
        </div>
        <div class="item">
          <blockquote>
            <div class="row">
              <div class="col-sm-8 col-sm-8-nw col-sm-offset-2">
                <h2>Client's Name</h2>
                <h3>Designation</h3>
                <p>
                  A short note about lcp and the projects done so far A short
                  note about lcp and the projects done so far A short note about
                  lcp and the projects done so far A short note about lcp and
                  the projects done so far.
                </p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>

      <!-- Carousel Buttons Next/Prev -->
      <a data-slide="prev" href="#quote-carousel" class="left carousel-control"
        ><b-icon icon="chevron-left" scale="1.5"></b-icon
      ></a>
      <a data-slide="next" href="#quote-carousel" class="right carousel-control"
        ><b-icon icon="chevron-right" scale="1.5"></b-icon
      ></a>
    </div>
  </b-col>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TestimoCarousel",
  computed: mapState(["testimonials"]),
};
</script>

<style scoped>
/* Carousel */
@import "../../../assets/css/bootstrap.css";
#quote-carousel {
  padding: 0 10px 30px 10px;
  margin-top: 30px;
  /* Control buttons  */
  /* Previous button  */
  /* Next button  */
  /* Changes the position of the indicators */
  /* Changes the color of the indicators */
}
#quote-carousel .carousel-control {
  background: none;
  color: #0ccbfd;
  font-size: 2.3em;
  text-shadow: none;
  padding-top: 0.5rem;
  margin-top: 14rem;
  margin-bottom: 9rem;
  border-radius: 50%;
  border: 2px solid #0ccbfd;
  height: 60px;
  width: 60px;
}
#quote-carousel .carousel-control.left {
  left: -60px;
  text-align: center;
}
#quote-carousel .carousel-control.right {
  right: -60px;
  text-align: center;
}
#quote-carousel .carousel-indicators {
  right: 50%;
  height: 10rem;
  top: auto;
  bottom: 0px;
  margin-right: -19px;
}
#quote-carousel .carousel-indicators li {
  width: 50px;
  height: 50px;
  margin: 5px;
  cursor: pointer;
  border: 2px solid #ccc;
  border-radius: 50px;
  padding: 0.3rem;
  opacity: 0.4;
  overflow: hidden;
  transition: all 0.4s;
}
#quote-carousel .carousel-indicators .active {
  /* background: #333333; */
  width: 70px;
  height: 70px;
  border-radius: 100px;
  border: 2px solid #0ccbfd;
  opacity: 1;
  overflow: hidden;
}
.carousel-inner {
  min-height: 300px;
}
.item blockquote {
  border-left: none;
  margin: 0;
}
.item h2 {
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2a2b2e;
}
.item h3 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #8ca0b4;
  margin-bottom: 2.5rem;
}
.item p {
  font-size: 1.6rem;
  font-weight: 500;
  color: #2a2b2e;
}

.carousel-inner {
  min-height: 0 !important;
}
.carousel-indicators {
  position: relative;
}

@media only screen and (max-width: 1200px) {
  #quote-carousel .carousel-control.left {
    left: -37px;
  }
  #quote-carousel .carousel-control.right {
    right: -40px;
  }
  #quote-carousel .carousel-control {
    font-size: 2rem;
    padding-top: 0.7rem;
    margin-top: 20rem;
    height: 45px;
    width: 45px;
  }
}
@media only screen and (max-width: 767px) {
  .col-sm-8-nw {
    max-width: 99.666667% !important;
    flex: 0 0 99.666667% !important;
  }
  #quote-carousel .carousel-indicators li {
    width: 70px;
    height: 41px;
  }
  #quote-carousel .carousel-indicators .active {
    /* background: #333333; */
    width: 70px;
    height: 41px;
  }

  #quote-carousel .carousel-indicators {
    height: 7rem;
  }
}
@media only screen and (max-width: 576px) {
  .col-sm-8-nw {
    max-width: 99.666667% !important;
  }
}
@media only screen and (max-width: 480px) {
  #quote-carousel .carousel-control {
    display: none;
  }
  #quote-carousel .carousel-indicators li {
    display: flex;
  }
  #quote-carousel .carousel-indicators .active {
    /* background: #333333; */
    width: 70px;
    height: 50px;
  }
}
@media only screen and (max-width: 375px) {
  #quote-carousel .carousel-indicators {
    height: 0;

    display: none;
  }
}
</style>
