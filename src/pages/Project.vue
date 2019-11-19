<template>
  <div>
    <div class="title-section col-12 col-md-10 mx-auto">
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

    <Info
      :title="title"
      :authors="authors"
      :date="date"
      :role="role"
      :client="client"
      :link="link"
      :linklabel="linklabel"
    ></Info>

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
    <div class="col-3 mx-auto">
      <a class="btn btn-1 btn-1c" :href="link">{{ linklabel }}</a>
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
    "link",
    "linklabel"
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
@import "~bootstrap/scss/mixins";

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
  @include media-breakpoint-down(sm) {
    font-size: 95px;
  }
}

.project-desc {
  color: $main-color;
  font-size: 2.5vw;
  white-space: nowrap;
  font-family: $main-font;
  font-weight: $bold;
  text-align: right;
  @include media-breakpoint-down(sm) {
    text-align: left;
    font-size: 10vw;
  }
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
  padding: 0;
  @include media-breakpoint-down(sm) {
    height: 200px;
  }
  img {
    width: 100%;
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
</style>
