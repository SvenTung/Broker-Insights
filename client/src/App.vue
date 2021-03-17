<template lang="html">

  <div class="app" id="app">
    <div class="home-page" id="home-page">
      <home-page />
    </div>
    <div class="clients" v-if="this.display == clients">

    </div>
    <div class="policies" v-if="this.display == policies">

    </div>
  </div>

</template>

<script>
import { eventBus } from "./main.js";
import ClientServices from "./services/ClientServices.js";
import HomePage from "./components/HomePage.vue";
import ClientsList from "./components/ClientsList.vue";
import PoliciesList from "./components/PoliciesList.vue";

export default {
  name: "app",

  data() {
    return {
      clients: [],
      policies: [],
      display: "none"
    };
  },

  mounted() {
    ClientServices.getClients().then(clients => (this.clients = clients));

    eventBus.$on("show-clients", clients => {
      this.displayClients();
    })

    eventBus.$on("show-policies", id => {
      this.displayPolicies(id);
    });
  },

  components: {
    "home-page": HomePage,
    "clients-list": ClientsList,
    "policies-list": PoliciesList,
  },

  methods: {
    displayClients() {
      this.display = "clients"
    },

    displayPolicies(id) {
      ClientServices.getPoliciesById(id).then(policies => (this.policies = policies));
      this.display = "policies"
    }
  }
};
</script>

<style lang="css" scoped>
</style>
