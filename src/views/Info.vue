<template>
  <div class="info-section col-12 col-md-10 mx-auto">
    <div class="row">
      <div class="col-6 col-md-3 mt-3">
        <div class="info-title">
          <h3>{{ role.type }}</h3>
        </div>
        <div class="info-desc">
          <p>{{ role.text }}</p>
        </div>
      </div>
      <div class="col-6 col-md-3 mt-3">
        <div class="info-title">
          <h3>Client</h3>
        </div>
        <div class="info-desc">
          <p>{{ client }}</p>
        </div>
      </div>
      <div class="col-6 col-md-3 mt-3">
        <div class="info-title">
          <h3>Date</h3>
        </div>
        <div class="info-desc">
          <p>{{ date }}</p>
        </div>
      </div>
      <div class="col-6 col-md-3 mt-3">
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
          <a class="btn btn-1 btn-1c" :href="link">{{ linklabel}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  name: "Info",
  props: ["title", "authors", "date", "role", "client", "link", "linklabel"],
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
    font-size: 2em;
    font-family: $main-font;
    font-weight: $medium;
    margin-bottom: 1rem;
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

.btn {
  margin-top: 3rem;
  width: 100%;
  border: 1px solid white;
  border-radius: 0px;
  font-family: $main-font;
  font-weight: $light;
  font-size: inherit;
  color: inherit;
  background: none;
  cursor: pointer;
  padding: 12.5px 5px;
  display: inline-block;
  letter-spacing: 1px;
  outline: none;
  position: relative;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.btn:after {
  content: "";
  position: absolute;
  z-index: -1;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.btn-1c:after {
  width: 0%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
}

.btn-1c:hover,
.btn-1c:active {
  color: black;
}

.btn-1c:hover:after,
.btn-1c:active:after {
  width: 100%;
}

img {
}
</style>
