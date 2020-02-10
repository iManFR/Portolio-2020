<template>
  <div class="col-12 col-md-10 mx-auto">
    <div class="row">
      <div class="col-12 col-md-5">
        <!-- <img src="../assets/img/giphy.gif" alt class="img-fluid" /> -->
        <!-- <img src="../assets/img/me.jpg" alt class="img-fluid" /> -->
        <img ref="image" src="../assets/img/pp.jpg" alt class="img-fluid test" />
      </div>
      <div class="col-md-1"></div>
      <div class="col-12 col-md-6 d-flex align-items-center">
        <p v-html="data.about.text" class="about-text"></p>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
import { TimelineLite } from "gsap";
export default {
  name: "Me",
  data() {
    return {
      data: data
    };
  },
  mounted() {
    const { image } = this.$refs;
    const timeline = new TimelineLite();

    // timeline.from(image, 2, { x: -200 });

    let scrollMonitor = require("scrollMonitor");
    let myElement = document.querySelector(".test");

    let elementWatcher = scrollMonitor.create(myElement);
    // console.log(myElement.classList.contains("viewed"));
    elementWatcher.enterViewport(function() {
      console.log("I have entered the viewport");
      // if (!myElement.classList.contains("viewed")) {
      timeline.from(image, 2, { x: -200 });
      // }

      // myElement.classList.add("viewed");
      // console.log(myElement.classList.contains("viewed"));
    });
    elementWatcher.exitViewport(function() {
      console.log("I have left the viewport");
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "~bootstrap/scss/mixins";

.titles {
  margin: 12.5rem 0rem 9rem;
  .title {
    // font-size: calc(60px + (23000vw - 115000px) / 1900);
    font-size: 12em;
    white-space: nowrap;
    font-family: "GT America";
    font-weight: 900;
    line-height: 1em;
    color: $main-color;
    @include media-breakpoint-down(md) {
      font-size: 6em;
    }
    @include media-breakpoint-down(sm) {
      font-size: 3em;
    }
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
