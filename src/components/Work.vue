<template>
  <!-- <router-link :to="`/${slug}`"> -->
  <router-link
    :to="{ 
      name: 'Project',
      params: { 
        slug: slug, 
        title: title, 
        titlehtml: titlehtml, 
        desc: desc, 
        authors: authors, 
        date: date, 
        role: role,
        cover: cover,
        imgs: imgs,
        path: path,
        client: client,
        link: link,
        linklabel
      } 
    }"
  >
    <div v-if="visible" class="content__item" style="--aspect-ratio: 16/9;">
      <div class="content__item-imgwrap">
        <!-- <div
          class="content__item-img"
          :style="{ 'background-image': 'url(' + '../assets/img/frnch/' + imgs[0] + ')' }"
        ></div>-->
        <!-- <div class="content__item-img" :style="test"></div> -->
        <!-- <div class="content__item-img" :style="{ backgroundImage: `url('${path+img}')` }"></div> -->
        <!-- <div class="content__item-img" :style="{ 'background-image': 'url(' + path + imgs[0] + ')' }"></div> -->
        <!-- <div class="content__item-img" style="background-image: url(../../public/image1.jpg)"></div> -->
        <!-- <div class="content__item-img" :style="{ backgroundImage: `url(${image})` }"></div> -->
        <!-- <div
          class="content__item-img"
          :style="{ backgroundImage: `url('../src/assets/img/cover/${cover}')` }"
        ></div>-->
        <!-- <div
          class="content__item-img"
          :style="{ backgroundImage: 'url(../src/assets/img/cover/' + cover + ')' }"
        ></div>-->
        <div class="content__item-img" :style="{'background-image': 'url(' + imageUrl + ')'}"></div>
      </div>
      <h2 v-html="titlehtml" class="content__item-title">
        <!-- <br />
        <span>{{desc}}</span>-->
      </h2>
    </div>
  </router-link>
</template>

<script>
import data from "../data.json";
export default {
  name: "Work",
  props: [
    "title",
    "titlehtml",
    "slug",
    "desc",
    "path",
    "imgs",
    "visible",
    "cover",
    "authors",
    "date",
    "role",
    "client",
    "link",
    "linklabel"
  ],
  data() {
    return {
      imageUrl: require(`../assets/img/cover/${this.cover}`)
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "~bootstrap/scss/mixins";

.content__item-title {
  color: white !important;
  // font-size: calc(30px + (23000vw - 115000px) / 1900) !important;
  font-size: 7.5vw !important;
  white-space: nowrap !important;
  font-family: $main-font !important;
  font-weight: 900 !important;
  line-height: 1em !important;
  color: white !important;
  text-transform: uppercase !important;
  display: flex;
  justify-content: center;
  flex-flow: column;
  text-align: center;
  span {
    font-size: 2vw !important;
    text-align: center !important;
  }
}
*,
*::after,
*::before {
  box-sizing: border-box;
}

:root {
  font-size: 16px;
}

body {
  margin: 0;
  --color-text: #dc6e25;
  --color-bg: #efded3;
  --color-link: #000;
  --color-link-hover: #dc6e25;
  --aspect-ratio: 1/1.5;
  --imgwidthmax: 500px;
  --size-title: 10rem;
  --font-weight-title: 400;
  color: var(--color-text);
  background-color: var(--color-bg);
  font-family: turquoise, serif;
  font-size: 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.demo-4 {
  --color-text: #a9a798;
  --color-bg: #cccdb9;
  --color-link: #fff;
  --color-link-hover: #a9a798;
  --color-title: #fff;
  font-family: collier, sans-serif;
  --font-title: inherit;
  --font-weight-title: 100;
  font-size: 1.15rem;
  --imgwidthmax: 520px;
}

.content {
  grid-area: grid;
  margin: 25vh 0 30vh;
}

.content--offset {
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-gap: 30vh 10vw;
}

.content--full {
  width: 100vw;
  justify-self: center;
}

.content--padded {
  padding: 0 10vw;
}

.content__item {
  --imgwidth: calc(var(--imgwidthmax) * var(--aspect-ratio));
  width: var(--imgwidth);
  max-width: 100%;
  position: relative;
  will-change: transform;
  margin-bottom: 30vh;
  display: grid;
  grid-template-columns: 50% 50%;
}

.content__item--wide {
  grid-template-columns: 20% 80%;
}

.content__item--wide:nth-child(even) {
  grid-template-columns: 80% 20%;
}

.content--center .content__item {
  margin: 0 auto 60vh;
}

.content__item--expand {
  width: 100%;
  grid-template-columns: minmax(0, var(--imgwidth)) 1fr;
}

.content__item--expand:nth-child(even) {
  grid-template-columns: 1fr minmax(0, var(--imgwidth));
}

.content--alternate .content__item {
  max-width: 90vw;
}

.content--offset .content__item {
  margin: 0 auto 15vh;
}

.content--offset .content__item:nth-child(even) {
  align-self: end;
  margin-bottom: -20vh;
}

.content--alternate .content__item:nth-child(even) {
  margin-left: auto;
}

.content__item-imgwrap {
  position: relative;
  --imgwidth: 100%;
  margin: 0 auto;
  grid-area: 1 / 1 / 3 / 3;
  overflow: hidden;
  // width: var(--imgwidth);
  padding-bottom: calc(var(--imgwidth) / (var(--aspect-ratio)));
  will-change: transform;
  width: 100%;
  height: 700px;
  @include media-breakpoint-down(md) {
    height: 600px;
  }
}

.demo-2 .content__item-imgwrap {
  outline: 1px solid transparent;
}

.content__item--expand .content__item-imgwrap {
  grid-area: 1 / 1 / 3 / 2;
}

.content__item--expand:nth-child(even) .content__item-imgwrap {
  grid-area: 1 / 2 / 3 / 3;
  justify-self: end;
}

.content__item-img {
  --overflow: 40px;
  height: calc(100% + (2 * var(--overflow)));
  top: calc(-1 * var(--overflow));
  width: 100%;
  position: absolute;
  background-size: cover;
  background-position: 50% 0%;
  will-change: transform;
  opacity: 0.8;
  // opacity: 1;
}

.content__item-img--t1 {
  --overflow: 60px;
}

.content__item-img--t2 {
  --overflow: 80px;
}

.content__item-img--t3 {
  --overflow: 120px;
}

.content__item-number {
  opacity: 0.03;
  font-size: 25vw;
  position: absolute;
  top: -7vw;
  right: -10vw;
  line-height: 1;
}

.content__item:nth-child(even) .content__item-number {
  right: auto;
  left: -7vw;
}

.content__item-title {
  position: relative;
  font-size: var(--size-title);
  padding: 0 3vw;
  margin: calc(var(--size-title) * -1 / 2) 0 0 0;
  align-self: start;
  line-height: 1;
  font-family: var(--font-title);
  font-weight: var(--font-weight-title);
  color: var(--color-title);
  will-change: transform;
  mix-blend-mode: var(--blendmode-title);
}

.content--center .content__item-title {
  grid-area: 1 / 1 / 3 / 3;
  margin: auto;
}

.content__item-title--layer {
  padding: 0;
  z-index: 10;
  grid-area: 1 / 1 / 2 / 3;
  width: 100%;
  text-align: center;
}

.content__item-description {
  grid-area: 3 / 1 / 3 / 3;
  width: 70%;
  position: relative;
  margin: 0;
  padding: 1rem 0 0 0;
  color: var(--color-description);
}

.content--alternate .content__item-title,
.content__item--wide:nth-child(even) .content__item-description {
  grid-area: 3 / 1 / 4 / 2;
  justify-self: start;
}

.content--alternate .content__item:nth-child(even) .content__item-title,
.content__item--wide .content__item-description {
  grid-area: 3 / 2 / 4 / 3;
  justify-self: end;
  width: auto;
}

.content__item--expand .content__item-description {
  grid-area: 1 / 2 / 3 / 3;
  justify-self: start;
  align-self: start;
  padding: 0 2rem;
  width: 250px;
  font-size: 0.9rem;
}

.content__item--expand:nth-child(even) .content__item-description {
  grid-area: 1 / 1 / 3 / 2;
  justify-self: end;
  text-align: right;
}

.content__item-deco {
  position: absolute;
  top: 2rem;
  left: 10vw;
  height: 30%;
  width: 1px;
  background: #d79612;
}

.content__item-decobar {
  width: 140%;
  height: 25%;
  top: 20%;
  left: -20%;
  position: absolute;
  background: #dd525a;
  mix-blend-mode: color-burn;
}

@media screen and (min-width: 53em) {
  .page--layout-1 {
    grid-template-columns: 30% 70%;
    grid-template-areas: "header header" "...  meta" "grid grid";
  }
  .page--layout-2 {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "header meta" "...  meta" "grid grid";
  }
}

@media screen and (max-width: 40em) {
  .content__item--expand .content__item-imgwrap,
  .content__item--expand:nth-child(even) .content__item-imgwrap {
    grid-area: 1 / 1 / 3 / 3;
  }
  .content__item--expand .content__item-description,
  .content__item--expand:nth-child(even) .content__item-description,
  .content__item--wide .content__item-description,
  .content__item--wide:nth-child(even) .content__item-description {
    grid-area: 3 / 1 / 4 / 3;
    padding: 1rem 0;
    width: 100%;
    text-align: left;
  }
  .content__item--wide .content__item-description {
    padding: 1rem;
  }
  .content--alternate .content__item-title,
  .content--alternate .content__item:nth-child(even) .content__item-title {
    grid-area: 1 / 1 / 4 / 2;
  }
}
</style>
