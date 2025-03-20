<template>
  <div class="home">
    <FilterNav :current="current" @filterChange="current = $event" />
    <div v-if="projects.length === 0">
      <p>Loading...</p>
    </div>
    <div v-else>
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handelDelete"
          @complete="handelComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "@/components/SingleProject.vue";
import FilterNav from "@/components/FilterNav.vue";

export default {
  name: "HomeView",
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: "all",
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => (this.projects = data))
      .catch((error) => console.error("Error:", error));
  },
  methods: {
    handelDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id);
    },
    handelComplete(id) {
      this.projects = this.projects.map((project) => {
        if (project.id === id) {
          project.complete = !project.complete;
        }
        return project;
      });
    },
  },
  computed: {
    filteredProjects() {
      if (this.current === "completed") {
        return this.projects.filter((project) => project.complete);
      }
      if (this.current === "ongoing") {
        return this.projects.filter((project) => !project.complete);
      }
      return this.projects;
    },
  },
};
</script>
