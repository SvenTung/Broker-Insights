<template lang="html">
  <div class="policies-table">
    <table>
      <tr>
        <th>Customer Name</th>
        <th>Customer Address</th>
        <th>Premium</th>
        <th>Policy Type</th>
        <th>Insurer Name</th>
      </tr>
      <policy-table-item v-for="(policy, index) in policies" :policy="policy" :counter="index"/>
    </table>
  </div>

</template>

<script>
import PolicyTableItem from "./PolicyTableItem.vue";
import { eventBus } from "../main.js";

export default {
  name: "policies-table",
  props: ["policies"],
  components: {
    "policy-table-item": PolicyTableItem
  }
}
</script>

<style lang="css" scoped>
th{
  color: #00EAFF;
  text-align: left;
  padding: 0 20px;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
}
</style>
