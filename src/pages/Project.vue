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

    <Info :title="title" :authors="authors" :date="date" :role="role" :client="client" :link="link"></Info>

    <!-- <div class="col-12 col-md-10 mx-auto">
      <img class="img-fluid" :src="imagePath+imgs[0]" alt />
      <img class="img-fluid" :src="imagePath+imgs[1]" alt />
    </div>
    <div class="container-fluid middle-banner">
      <img :src="imagePath+imgs[2]" alt />
    </div>
    <div class="col-12 col-md-10 mx-auto">
      <img class="img-fluid" :src="imagePath+imgs[3]" alt />
      <img class="img-fluid" :src="imagePath+imgs[4]" alt />
    </div>-->
    <div class="col-12 col-md-10 mx-auto">
      <img class="img-fluid" :src="imagePath1" alt />
      <img class="img-fluid" :src="imagePath2" alt />
    </div>
    <div class="container-fluid middle-banner">
      <img :src="imagePath3" alt />
    </div>
    <div class="col-12 col-md-10 mx-auto">
      <img class="img-fluid" :src="imagePath4" alt />
      <img class="img-fluid" :src="imagePath5" alt />
    </div>
    <ProjectNav />
    <Footer></Footer>
  </div>
</template>

<script>
import Info from "../views/Info";
import ProjectNav from "../components/ProjectNav";
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
    "path",
    "client",
    "link"
  ],
  components: {
    Info,
    ProjectNav,
    Footer
  },
  data() {
    return {
      // imagePath: `src/assets/img/${this.slug}/`
      imagePath1: require(`../assets/img/${this.slug}/image1.jpg`),
      imagePath2: require(`../assets/img/${this.slug}/image2.jpg`),
      imagePath3: require(`../assets/img/${this.slug}/image3.jpg`),
      imagePath4: require(`../assets/img/${this.slug}/image4.jpg`),
      imagePath5: require(`../assets/img/${this.slug}/image5.jpg`)
    };
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
  color: $main-color;
  font-size: 2.5vw;
  white-space: nowrap;
  font-family: $main-font;
  font-weight: $bold;
  text-align: right;
}
img {
  // --aspect-ratio: 16/9;
  margin-bottom: 2.5rem;
}

.middle-banner {
  height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0 5rem;
}
</style>
