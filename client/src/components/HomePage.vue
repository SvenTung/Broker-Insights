<template lang="html">
  <div class="title-heading">
    <h1>Broker Insights</h1>
    <button class="btn" type="button" v-on:click="handleShowClientsClick()">Show Clients</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  name: "home-page",
  methods: {
    handleShowClientsClick() {
      eventBus.$emit("show-clients");
    }
  }
}
</script>

<style lang="css" scoped>
</style>
