<template>
  <div>
    <Title :title="title"></Title>
    <div class="content content--center col-11 col-md-10 col-lg-9 mx-auto">
      <Work
        v-for="(project, index) in projects"
        :key="index"
        :titlehtml="project.titlehtml"
        :cover="project.cover"
        :visible="project.visible"
        :slug="project.slug"
        :projectId="index"
      ></Work>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title";
import Work from "../components/Work";
export default {
  name: "Works",
  components: {
    Title,
    Work
  },
  data() {
    return {
      title: ["Some", "Projects"]
    };
  },
  computed: {
    projects() {
      return this.$store.getters.projects;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  /* margin-top: 10rem; */

  grid-area: grid;
  margin: 25vh 0 30vh;
}
</style>
