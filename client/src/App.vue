<template lang="html">

  <div class="app" id="app">
    <div class="home-page" id="home-page">
      <home-page />
    </div>
  </div>

</template>

<script>
import { eventBus } from "./main.js";
import HomePage from "./components/HomePage.vue";

export default {
  name: "app",

  data() {
    return {
      clients: []
    };
  },

  mounted() {
    eventBus.$on("get-policies", client => {
      this.displayPolicies(client);
    });
  },

  components: {
    "home-page": HomePage
  },

  methods: {
    displayPolicies(client) {
      this.display = policies
    }
  }
};
</script>

<style lang="css" scoped>
</style>
