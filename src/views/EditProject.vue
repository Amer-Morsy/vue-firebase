<template>
  <form @submit.prevent="handelSubmit">
    <label for="title">Title</label>
    <input type="text" v-model="title" required />
    <label for="details">Details</label>
    <textarea v-model="details" required></textarea>
    <button>Update project</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      url: `http://localhost:3000/projects/${this.id}`,
      title: "",
      details: "",
    };
  },
  mounted() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
      })
      .catch((error) => console.error("Error:", error));
  },
  methods: {
    handelSubmit() {
      fetch(this.url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: this.title, details: this.details }),
      })
        .then(() => this.$router.push({ name: "Home" }))
        .catch((error) => console.error("Error:", error));
    },
  },
};
</script>

<style></style>
