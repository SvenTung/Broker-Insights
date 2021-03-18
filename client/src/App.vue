<template lang="html">

  <div class="app" id="app">
    <div class="home-page" id="home-page">
      <home-page />
    </div>
    <div class="clients" v-if="this.display == 'clients'">
      <h1>Clients List</h1>
      <clients-list :clients="this.clients" />
    </div>
    <div class="policies" v-if="this.display == 'policies'">
      <p> {{this.client.client.name}} </p>
      <policies-list :policies="this.client.client.policies" />
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
      client: [],
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
      console.log(this.client);
    });

    eventBus.$on("policy-deleted", counter => {
      var updatedClient = this.client
      updatedClient.client.policies.splice(counter, 1)
      ClientServices.updatePolicies(updatedClient)
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
      for (var client of this.clients) {
        if (client._id == id) {
          this.client = client
        }
      };
      this.display = "policies"
    }
  }
};
</script>

<style lang="css" scoped>
</style>
