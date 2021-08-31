<template>
  <div v-if="pass.passid != null">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{ pass.userfullname }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          {{ pass.date.split("T")[0] }}
        </h6>
        <h6 class="card-subtitle mb-2 text-muted">
          {{ purposeList[parseInt(pass.purposeid)].title }}
        </h6>
        <h6 class="card-subtitle mb-2 bg-success" v-if="pass.approved">
          Approved
        </h6>
        <h6 class="card-subtitle mb-2 bg-danger" v-else-if="pass.rejected">
          Rejected
        </h6>
        <h6 class="card-subtitle mb-2 bg-info" v-else>
          Pending
        </h6>

        <p class="card-text">Duis excepteur elit esse excepteur ullamco.</p>
        <div v-if="!isAdmin">
          <button @click="deletePass(pass)" class="card-link">Delete</button>
          <button @click="printPass(pass)" class="card-link">Print</button>
        </div>
        <div v-else>
          <button @click="approve(pass)" class="card-link btn-success">
            Approve
          </button>
          <button @click="reject(pass)" class="card-link btn-danger">
            Reject
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Pass",
  computed: mapState(["pass", "active_el", "purposeList", "isAdmin"]),
  methods: {
    ...mapActions(["approvePass", "rejectPass"]),
    deletePass(pass) {
      // TODO
      // delete pass from db
      console.log(pass);
    },
    printPass(pass) {
      // TODO
      // print/mail pass from db
      console.log(pass);
    },
    approve(pass) {
      this.approvePass(pass);
      console.log(pass);
    },
    reject(pass) {
      // TODO
      // print/mail pass from db
      this.rejectPass(pass);
      console.log(pass);
    },
  },
};
</script>
<style>
</style>
