<template>
  <div class="full-view">
    <div class="col-12 col-md-10 mx-auto">
      <div class="titles-content">
        <h1 class="name">{{data.landing.name}}</h1>
        <h1 class="freelance">
          {{data.landing.freelance}}
          <div class="spinner">
            <span v-if="data.landing.aviability">Available</span>
            <span v-else>Unavailable</span>
          </div>
        </h1>

        <h1 v-for="role in data.landing.roles" :key="role.id">{{ role }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  name: "Landing",
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

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.spinner {
  // height: 14.2vh;
  height: 8.5vw;
  width: 8.5vw;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20%;
  top: 27.5%;
  will-change: transform;
  animation: rotation 3s linear infinite;
  span {
    background: $gradient-color-3; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      $gradient-color-1,
      $gradient-color-2,
      $gradient-color-3
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      $gradient-color-1,
      $gradient-color-2,
      $gradient-color-3
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 0.13em;
  }
}

.full-view {
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  font-size: 8.9vw;
  // font-size: 10.8vw;
  white-space: nowrap;
  text-align: left;
  text-transform: uppercase;
  font-family: $main-font;
  font-weight: 900;
  line-height: 1.1em;
  color: $main-color;
  @include media-breakpoint-down(sm) {
    font-size: 10vw;
  }
  &.name {
    // color: transparent !important;
    // -webkit-text-stroke: 1px;
    // -webkit-text-stroke-color: black;

    // background: #36d1dc; /* fallback for old browsers */
    // background: -webkit-linear-gradient(
    //   to right,
    //   #5b86e5,
    //   #36d1dc
    // ); /* Chrome 10-25, Safari 5.1-6 */
    // background: linear-gradient(
    //   to right,
    //   #5b86e5,
    //   #36d1dc
    // ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: $gradient-color-3; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      $gradient-color-1,
      $gradient-color-2,
      $gradient-color-3
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      $gradient-color-1,
      $gradient-color-2,
      $gradient-color-3
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &freelance {
    position: relative;
  }
}
</style>
