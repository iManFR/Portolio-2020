<template>
  <div class="col-10 col-md-8 mx-auto">
    <div class="titles">
      <h2 class="title left">{{ title[0] }}</h2>
      <h2 class="title right">{{ title[1] }}</h2>
    </div>
  </div>
</template>

<script>
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
    const TextSwipe = require("../js/TextSwipe");
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
    // font-size: 12em;
    font-size: 213px;
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
      will-change: transform;
    }
    &.right {
      text-align: right;
      will-change: transform;
    }
  }
}
</style>
