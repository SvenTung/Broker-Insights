<template lang="html">
  <div class="clients-list">
    <client-list-item v-for="(client, index) in this.clients" :client="client" :counter="index"/>
  </div>

</template>

<script>
import ClientListItem from "./ClientListItem.vue";

export default {
  name: "clients-list",
  props: ["clients"],
  components: {
    "client-list-item": ClientListItem
  }
}
</script>

<style lang="css" scoped>
</style>
