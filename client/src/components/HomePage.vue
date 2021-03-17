<template lang="html">
  <div class="title-heading">
    <h1>Broker Insights</h1>
    <p v-on:click="handleShowClick">Show Clients</p>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  name: "home-page",

  methods: {
    handleShowClick() {
      eventBus.$emit("show-clients");
    }
  }
}
</script>

<style lang="css" scoped>
</style>
