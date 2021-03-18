<template lang="html">
    <tr>
      <td>{{this.policy.customer_name}}</td>
      <td>{{this.policy.customer_address}}</td>
      <td>£{{this.policy.premium}}</td>
      <td>{{this.policy.policy_type}}</td>
      <td>{{this.policy.insurer_name}}</td>
      <button v-on:click="handleDeletePolicyClick">Delete</button>
    </tr>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  name: "policy-table-item",
  props:[
    "policy",
    "counter"
  ],
  methods: {
    handleDeletePolicyClick() {
      eventBus.$emit("policy-deleted", this.counter)
    }
  }
}
</script>

<style lang="css" scoped>
td {
  padding: 3px 20px 3px;
  border: 1px solid black;
}
button {
  padding: 3px 20px 3px;
}
</style>
