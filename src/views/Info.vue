<template>
  <div class="info-section col-10 mx-auto">
    <div class="row">
      <div class="col-6 col-md-3">
        <div class="info-title">
          <h3>{{ role.type }}</h3>
        </div>
        <div class="info-desc">
          <p>{{ role.text }}</p>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="info-title">
          <h3>Brief</h3>
        </div>
        <div class="info-desc">
          <p>{{ brief }}</p>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="info-title">
          <h3>Date</h3>
        </div>
        <div class="info-desc">
          <p>{{ date }}</p>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="info-title">
          <h3>Authors</h3>
        </div>
        <div class="info-desc">
          <!-- <p>
            Agency : W3lead
            <br />Dev : Manolo Pecout, Thiebauld Genet
            <br />Design UI/UX : Arthur Fayolle
          </p>-->
          <p v-for="author in authors" :key="author.id">{{ author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  name: "Info",
  props: ["title", "authors", "date", "role", "brief"],
  components: {},
  data() {
    return {
      data: data
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/variables.scss";

.info-section {
  margin: 3rem 0;
}

.info-title {
  h3 {
    font-size: 2.25em;
    font-family: $main-font;
    font-weight: $medium;
  }
}
.info-desc {
  p {
    font-size: 1em;
    font-family: $main-font;
    font-weight: $light;
    margin: 0;
  }
}

img {
}
</style>
