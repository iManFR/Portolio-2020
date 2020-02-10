<template>
  <div class="full-view">
    <div class="col-12 col-md-10 mx-auto">
      <div class="footer-content">
        <div class="contact-text col-12 col-md-9 mx-auto">
          <p>{{ data.footer.text[0] }}</p>
          <p>
            {{ data.footer.text[1] }}
            <!-- <br /> -->
            <span>
              <a href="mailto:manolo.p@hotmail.fr">{{ data.footer.mail }}</a>
            </span>
          </p>
        </div>
        <div class="social-links">
          <ul>
            <li v-for="social in data.footer.socials" :key="social.id">
              <a :href="social.link" target="_blank">{{ social.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  name: "Footer",
  data() {
    return {
      data: data
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "~bootstrap/scss/mixins";

.footer-content {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .contact-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    text-align: center;
    p {
      font-family: "GT America";
      font-weight: 900;
      line-height: 1.1em;
      // width: 80%;
      color: $main-color;
      font-size: 2.5em;
      @include media-breakpoint-down(md) {
        font-size: 1.75em;
      }
      @include media-breakpoint-down(sm) {
        font-size: 1em;
      }
      span {
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
    }
  }
  .social-links {
    position: absolute;
    bottom: 1.5%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    ul {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      padding: 0;
      margin-bottom: 16px;
      li {
        list-style: none;
        a {
          color: $main-color;
          font-family: "GT America";
          font-weight: 900;
          font-size: 2.5em;
          @include media-breakpoint-down(md) {
            font-size: 1.75em;
          }
          @include media-breakpoint-down(sm) {
            font-size: 1em;
          }
        }
      }
    }
  }
}
</style>
