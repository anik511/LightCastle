<template>
  <div class="tab">
    <div class="timeline">
      <section class="tab-content">
        <img src="../../assets/Group 1261.png" alt="" />
        <span>Entrepreneurship Ecosystem</span>
      </section>
      <div class="line">
        <div class="line-content">
          <div class="content">
            <h1>Delivering</h1>
          </div>
          <div class="content">
            <h1>Shipment accepted</h1>
          </div>

          <div class="content">
            <h1>Pick up</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* timeline */
.timeline {
  max-width: 540px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 34px 30px;
  background-color: #fff;
  border-radius: 18px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.tab-content {
  padding: 10px 75px;
}
.tab-content span {
  font-size: 1.8rem;
  font-weight: 700;
  padding: 0 0rem 0 0;
  margin-top: 2rem;
  float: right;
}
.line {
  padding: 0 90px;
  position: relative;
  margin-top: 35px;
}

.line::before {
  position: absolute;
  width: 1px;
  height: 110%;
  left: 90px;
  top: -1px;
  background-color: #0ccbfd;
  content: "";
}

.line .content {
  position: relative;
  padding-left: 7rem;
}

.line .content + .content {
  margin-top: 40px;
}

.line .content h1 {
  font-size: 16px;
  margin-bottom: 5px;
  margin-top: 15px;
}

.line .content p {
  font-size: 14px;
}

.line .content::before {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #0ccbfd;
  content: "";
  left: -9px;
  border-radius: 50%;
}
</style>
