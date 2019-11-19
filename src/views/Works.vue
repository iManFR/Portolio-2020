<template>
  <div>
    <Title :title="title"></Title>
    <div class="content content--center col-11 col-md-10 col-lg-9 mx-auto">
      <Work
        v-for="work in data.works.projects"
        :key="work.id"
        :title="work.title"
        :titlehtml="work.titlehtml"
        :slug="work.slug"
        :desc="work.desc"
        :path="work.imgpath"
        :cover="work.cover"
        :imgs="work.imgs"
        :visible="work.visible"
        :authors="work.authors"
        :date="work.date"
        :role="work.role"
        :client="work.client"
        :link="work.link"
        :linklabel="work.linklabel"
      ></Work>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
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
      data: data,
      title: ["Some", "Projects"]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  margin-top: 10rem;
}
</style>
