<template>
  <div class="footer">
    <b-container>
      <b-row>
        <b-col class="footer-left" cols="12" sm="12" md="6" lg="6">
          <img src="../assets/Group 1115.png" alt="logo" />
          <p>
            A short introduction about lcp A short introduction about lcp A
            short introduction about lcp
          </p>
          <ul>
            <li>
              <a href="#"> <b-icon icon="facebook" scale="2"></b-icon></a>
            </li>
            <li>
              <a href="#"><b-icon icon="linkedin" scale="2"></b-icon></a>
            </li>
          </ul>
        </b-col>
        <b-col class="footer-right" cols="12" sm="12" md="6" lg="6">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Industries</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Get in Touch</a></li>
          </ul>
          <b-input-group size="lg" class="mt-3">
            <b-form-input placeholder="Your Email"></b-form-input>
            <b-input-group-append>
              <b-button variant="primary">Subscribe</b-button>
            </b-input-group-append>
          </b-input-group>
          <p>Subscribe for Newsletters</p>
        </b-col>
        <b-col class="footer-bottom" cols="12" sm="12" md="12" lg="12">
          <p>2020 LightCastle Partners. All rights reserved.</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SectionSlot",
};
</script>

<style scoped>
.footer {
  padding-top: 7rem;
  font-size: 1.6rem;
  padding-bottom: 2rem;
  background-color: #e5f2ff;
  margin-bottom: 2rem;
}
.footer-left {
  padding-right: 11rem;
}
.footer-left img {
  margin-bottom: 4rem;
}
.footer-left p {
  font-size: 1.4rem;
  font-weight: 600;
  color: #2a2b2e;
}
.footer-left ul {
  display: flex;
  margin-top: 4rem;
}
.footer-left ul li {
  padding: 13px 11px 9px 16px;
  width: 50px;
  height: 50px;
  color: #0073bb;
  border: 1px solid #0073bb;
  border-radius: 50%;
  margin-right: 2rem;
  transition: 0.5s;
}
.footer-left ul li:first-child {
  padding-top: 12px;
}
.footer-left ul li:hover {
  /* background-color: #0073bb; */
  color: #ffffff;
  transform: rotate(360deg);
}
.footer-left ul li a {
  text-decoration: none;
}

.footer-right ul {
  display: flex;
  border-top: 1px solid #0ccbfd;
  border-bottom: 1px solid #0ccbfd;
  padding: 2.5rem 2rem;
  margin-bottom: 4rem;
}
.footer-right ul li {
  margin-right: 4.7rem;
}
.footer-right ul li:last-child {
  margin-right: 0 !important;
}
.footer-right ul li a {
  font-weight: 700;
  color: #2e2a2a;
  text-decoration: none;
}
.form-control {
  padding: 2.5rem 1rem !important;
  border: 1px solid #0ccbfd;
}
.form-control::placeholder {
  color: #6aaed8;
}
.footer-right p {
  margin-top: 2rem;

  font-weight: 700;
  color: #00568b;
}
.btn {
  padding: 0 4rem !important;

  font-weight: 700;
}
.footer-bottom {
  border-top: 1px solid #0073bb;
  padding: 3rem 0;
  text-align: center;
  margin-top: 5rem;
}
</style>
