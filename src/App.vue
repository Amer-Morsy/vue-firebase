<template>
  <Navbar />
  <router-view></router-view>
</template>
<script>
import Navbar from "./components/NavbarComp.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      title: "My First Vue App!",
    };
  },
};
</script>
<style>
body {
  background: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
</style>
