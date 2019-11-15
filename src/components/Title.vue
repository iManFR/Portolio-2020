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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.titles {
  margin: 12.5rem 0rem 9rem;
  .title {
    font-size: calc(60px + (23000vw - 115000px) / 1900);
    white-space: nowrap;
    font-family: "GT America";
    font-weight: 900;
    line-height: 1em;
    color: white;
    &.left {
      text-align: left;
    }
    &.right {
      text-align: right;
    }
  }
}
</style>
