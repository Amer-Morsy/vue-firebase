<template>
  <h1>{{ title }}</h1>
  <p>wellcome...</p>
  <teleport to="#modals">
    <Modal v-if="showModal" @close="toggleModal" theme="sale">
      <template v-slot:links>
        <a href="#">sign up now!</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Givaway!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </teleport>

  <teleport to="#modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Sign up to the Newsletter</h1>
      <p>For updates and promo codes!</p>
    </Modal>
  </teleport>

  <button @click.alt="toggleModal">open modal (alt click)</button>
  <button @click="toggleModalTwo">open modal 2</button>
</template>

<script>
import Modal from "./components/ModalComponent.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App!",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>
<style>
#app,
#modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
