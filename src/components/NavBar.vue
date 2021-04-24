<template>
  <!--  Navbar Code Start  -->
  <header class="header-section">
    <div class="top-header">
      <b-container>
        <b-row>
          <b-col cols="12" sm="12" md="6" lg="6">
            <ul class="left-ul" id="left-ul">
              <li>
                <a href="callto:"
                  ><b-icon icon="telephone-fill"></b-icon
                  ><span>+001234567890</span></a
                >
              </li>
              <li>
                <a href="mailto:"
                  ><b-icon icon="envelope-fill"></b-icon
                  ><span>info@lightcastlebd.com</span></a
                >
              </li>
            </ul>
          </b-col>
          <b-col cols="12" sm="12" md="6" lg="6">
            <div class="right">
              <b-button variant="outline-dark">Get In Touch</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="bottom-header">
      <b-container>
        <b-navbar class="nav-bg" toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#"
            ><a href="#">
              <img class="logo" src="../assets/Component 3 – 1.png" alt=""/></a
          ></b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">About</b-nav-item>
              <b-nav-item href="#">Services</b-nav-item>
              <b-nav-item href="#">Industries</b-nav-item>
              <b-nav-item href="#">Insigths</b-nav-item>
              <b-nav-item href="#">clients</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-input-group-prepend>
                  <b-button size="md" type="submit">
                    <b-icon icon="search" scale="1.5"></b-icon
                  ></b-button>
                </b-input-group-prepend>
                <b-form-input
                  size="md"
                  class="mr-sm-2 form-inline my-2 my-lg-0"
                  placeholder="Search"
                ></b-form-input>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-container>
    </div>
  </header>

  <!--  Navbar Code End  -->
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700&display=swap");

.navbar-toggler {
  font-size: 2.25rem;
  margin-right: 1rem;
  color: #fff;
  background: #5e99d5;
  line-height: 1.3rem;
  padding: 1rem 1.5rem;
}

/* Navbar Code Start */

.nav-bg {
  background: #f6f6f6 !important;
  padding: 0 0 0 4.7rem !important;
}
.navbar-brand {
  padding-top: 0.6125rem !important;
  padding-bottom: 0.6125rem !important;
}
.logo {
  width: 69%;
}
.header-section {
  width: 100%;
  background: linear-gradient(#0a0d5ecc, #0a0d5ecc),
    url("../assets/Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  position: relative;
}

.top-header {
  width: 100%;
  padding: 0.3rem 0;
}
.top-header .left-ul li {
  display: inline-block;
  margin-top: 1rem;
}
.top-header .left-ul li:last-child {
  padding: 0 0 0 4.6rem;
}
.top-header .left-ul li a {
  font-size: 1.6rem;
  font-weight: 400;
  color: #fff;
}
.top-header .left-ul li a span {
  padding-left: 0.5rem;
}
.top-header .right {
  display: inline-block;
  margin-top: 1rem;
  float: right;
}
.right .btn-outline-dark {
  padding: 0.4rem 2rem;
  font-weight: 600;
  font-size: 1.6rem;
  color: #ffffff;
  border-color: #ffffff;
  transition: 0.4s;
}
.right .btn-outline-dark:hover {
  color: #000000;
  border-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.556);
}

.bottom-header {
  width: 100%;
  /* background: #ffffff00; */
}
.navbar {
  width: 100%;
}
.bottom-header .navbar {
  padding: 0.5rem;
}
.bottom-header .navbar-brand img {
  padding: 1rem;
  margin-right: 2rem;
}
.nav-item {
  padding: 0 2rem;
}
.nav-item .nav-link {
  color: #000 !important;
  font-weight: 700;
  font-size: 1.6rem !important;
  transition: 0.5s;
}
.nav-item .nav-link:hover {
  color: #e6884f !important;
}
.btn-secondary {
  color: #000;
  background-color: transparent !important;
  border-color: transparent !important;
}

.btn-secondary:hover {
  color: #000 !important;
}
.form-control {
  color: #495057;
  font-size: 1.4rem;
  background-color: #fff0;
  background-clip: padding-box;
  border: 0px solid #fcfcfc00;
  transition: 0.5s;
}

.form-control:focus {
  color: #0b0b0b;
  background-color: #fff0;
  border-color: #fff0;
  border-bottom: 1px solid #e6884f;
  outline: 0;
  box-shadow: none !important;
}
/* @media only screen and (max-width: 767px) {
  .navbar-dark .navbar-brand {
    color: #fff;
    margin-right: 14rem;
    padding-left: 0;
  }
} */
@media only screen and (max-width: 480px) {
  .input-group-prepend .btn,
  .input-group-append .btn {
    font-size: 1.5rem;
    margin-left: 1.5rem;
  }
  .form-control {
    display: block;
    width: 75%;
  }
}
@media only screen and (max-width: 375px) {
  .nav-item .nav-link {
    font-size: 2rem !important;
  }
  .input-group-prepend .btn,
  .input-group-append .btn {
    font-size: 1.6rem;
  }
}
/* Navbar Code End */
</style>
