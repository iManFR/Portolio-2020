<template>
  <div class="full-view">
    <Title :title="title"></Title>
    <Me></Me>
  </div>
</template>

<script>
import Title from "../components/Title";
import Me from "../components/Me";
export default {
  name: "About",
  components: {
    Title,
    Me
  },
  data() {
    return {
      title: ["Who", "I am ?"]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
