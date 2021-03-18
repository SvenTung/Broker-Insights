<template lang="html">
  <div class="client-list-item">

    <div class="client-name">
      <p>{{this.client.client.name}}</p>
      <button v-on:click="handleShowPoliciesClick()">Show Policies</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  name: "client-list-item",
  props:[
    "client"
  ],
  methods: {
    handleShowPoliciesClick() {
      eventBus.$emit("show-policies", this.client._id);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
