<template lang="html">
  <div class="clients-list">
    <list-item v-for="(client, index) in this.clients" :client="client" :counter="index"/>
  </div>

</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  name: "clients-list",
  props: ["clients"],
  components: {
    "list-item": ListItem
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
</style>
