<template>
  <div class="col-12 col-md-10 mx-auto">
    <div class="row">
      <div class="col-12 col-md-6">
        <img src="../assets/img/giphy.gif" alt class="img-fluid" />
        <!-- <img src="../assets/img/me.jpg" alt class="img-fluid" /> -->
      </div>
      <div class="col-12 col-md-6 d-flex align-items-center">
        <p v-html="data.about.text" class="about-text"></p>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  name: "Me",
  data() {
    return {
      data: data
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "~bootstrap/scss/mixins";

.titles {
  margin: 12.5rem 0;
  .title {
    font-size: calc(60px + (23000vw - 115000px) / 1900);
    white-space: nowrap;
    font-family: "GT America";
    font-weight: 900;
    line-height: 1em;
    color: $main-color;
    &.left {
      text-align: left;
    }
    &.right {
      text-align: right;
    }
  }
}
p {
  color: $main-color;
  font-family: "GT America";
  font-weight: 500;
  font-size: 2em;
  line-height: 40px;
  @include media-breakpoint-down(sm) {
    margin-top: 30px;
    font-size: 1.25em;
    line-height: 30px;
  }
}
</style>
