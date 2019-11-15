<template>
  <div>
    <div class="title-section col-10 mx-auto">
      <div class="row">
        <div class="col-12 col-md-8">
          <!-- <h1 class="project-title" v-html="titlehtml"></h1> -->
          <h1 class="project-title">{{ title }}</h1>
        </div>
        <div class="col-12 col-md-4">
          <h2 class="project-desc">{{ desc }}</h2>
          <!-- <h2>{{ slug }}</h2> -->
        </div>
      </div>
    </div>

    <Info :title="title" :authors="authors" :date="date" :role="role"></Info>

    <div class="col-10 mx-auto">
      <!-- <img :src="path + imgs[0]" class="img-fluid" alt /> -->
      <img :src="cover" class="img-fluid" alt />
      <div class="row">
        <div class="col-12 col-md-6">
          <img :src="cover" class="img-fluid" alt />
        </div>
        <div class="col-12 col-md-6">
          <img :src="cover" class="img-fluid" alt />
        </div>
        <div class="col-12 col-md-6">
          <img :src="cover" class="img-fluid" alt />
        </div>
        <div class="col-12 col-md-6">
          <img :src="cover" class="img-fluid" alt />
        </div>
      </div>
      <img :src="cover" class="img-fluid" alt />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Info from "../views/Info";
import Footer from "../views/Footer";
export default {
  name: "Project",
  props: [
    "slug",
    "title",
    "titlehtml",
    "desc",
    "authors",
    "date",
    "role",
    "cover",
    "imgs",
    "path"
  ],
  components: {
    Info,
    Footer
  },
  data() {
    return {};
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/variables.scss";

.title-section {
  margin: 3rem 0;
}

.project-title {
  color: white;
  font-size: 120px;
  // white-space: nowrap;
  font-family: $main-font;
  font-weight: $black;
  line-height: 1em;
  color: white;
  text-transform: uppercase;
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

.project-desc {
  color: white;
  font-size: 2.5vw;
  white-space: nowrap;
  font-family: $main-font;
  font-weight: $bold;
  text-align: right;
}
img {
  // --aspect-ratio: 16/9;
  margin-bottom: 2rem;
}
</style>
