<template>
  <Navbar />
  <router-view></router-view>
</template>
<script>
import Navbar from "./components/NavbarCom.vue";
export default {
  components: { Navbar },
  name: "App",
  data() {
    return {
      title: "My First Vue App!",
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
