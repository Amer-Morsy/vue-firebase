<template>
  <div class="results">
    <p>Reaction Time: {{ score }} ms</p>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  name: "ResultsComp",
  props: ["score"],
  computed: {
    rank() {
      return this.score < 250 ? "Fast" : this.score < 400 ? "Medium" : "Slow";
    },
  },
};
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>
