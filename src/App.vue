<template>
  <div id="app">
    <main>
      <div data-scroll>
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import WorksAnim from "@/js/WorksAnim";
export default {
  name: "App",
  mounted() {}
};
</script>

<style lang="scss">
@import "./styles/app.scss";
// @import "./styles/fonts.scss";
// @import "./styles/variables.scss";

#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  width: 100vw;
}
*::selection {
  background: black;
  color: white;
  -webkit-text-stroke: 0px;
}
body {
  margin: 0;
  padding: 0;
  color: $main-color;
  overflow-x: hidden;
  background-color: $second-color;
}
*::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: $second-color;
}

*::-webkit-scrollbar {
  width: 5px;
  background-color: $main-color;
}

*::-webkit-scrollbar-thumb {
  background-color: $main-color;
  // border: 2px solid #555555;
}
.full-view {
  min-height: 100vh;
  min-width: 100%;
}

a {
  text-decoration: none;
  outline: none;
  &:hover,
  &:focus {
    text-decoration: none;
    outline: none;
  }
}
</style>
