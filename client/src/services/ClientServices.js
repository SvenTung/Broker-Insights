const baseURL = "http://localhost:3000/api/clients/"

export default {
  //gets all clients
  getClients() {
    return fetch(baseURL).then(res => res.json());
  },

  //gets a client by id
  getClientById(id) {
    return fetch(baseURL + id).then(res => res.json());
  },

  //gets a client's policies
  getPoliciesById(id) {
    return fetch(baseURL + "/policies/" + id).then(res => res.json());
  },

  //adds a client to database
  postUser(payload) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json());
  },

  //updates a client's policies
  updatePolicies(payload) {
    const id = payload._id;
    delete payload._id;
    return fetch(baseURL + id, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json());
  },

  //deletes a client
  deleteClient(id) {
    return fetch(baseURL + id, {
      method: "DELETE"
    });
  }


}
