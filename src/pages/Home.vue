<template>
  <div>
    <Landing></Landing>
    <About v-show="visible"></About>
    <Works></Works>
    <Footer></Footer>
  </div>
</template>

<script>
import Landing from "../views/Landing";
import About from "../views/About";
import Works from "../views/Works";
import Footer from "../views/Footer";
export default {
  name: "Home",
  components: {
    Landing,
    About,
    Works,
    Footer
  },
  data() {
    return {
      visible: true
    };
  },
  beforeCreate() {
    // console.log("✌🏻")
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
