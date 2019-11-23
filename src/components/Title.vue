<template>
  <div class="col-10 col-md-8 mx-auto">
    <div id="trigger" class="titles">
      <h2 class="title left">{{ title[0] }}</h2>
      <h2 class="title right">{{ title[1] }}</h2>
    </div>
  </div>
</template>

<script>
// import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap/all";
// import ScrollMagic from "scrollmagic";
// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

export default {
  name: "Title",
  props: ["title"],
  data() {
    return {
      msg: "Who",
      msg2: "I am ?"
    };
  },
  mounted() {
    // var controller = new ScrollMagic.Controller();
    // // build tween
    // var tween = TweenMax.to("#animate3", 1, { className: "+=fish" });
    // // build scene
    // var scene = new ScrollMagic.Scene({
    //   triggerElement: "#trigger",
    //   duration: 200,
    //   offset: -50
    // })
    //   .setTween(tween)
    //   .addIndicators({ name: "tween css class" }) // add indicators (requires plugin)
    //   .addTo(controller);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/variables.scss";

.titles {
  margin: 12.5rem 0rem 9rem;
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
</style>
