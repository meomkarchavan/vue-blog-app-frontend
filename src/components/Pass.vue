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
        <h6 class="card-subtitle mb-2" v-if="pass.approved">Approved</h6>
        <h6 class="card-subtitle mb-2" v-if="pass.rejected">Approved</h6>

        <p class="card-text">
         Duis excepteur elit esse excepteur ullamco.
        </p>
        <a @click="deletePass(pass)" class="card-link">Delete</a>
        <a @click="printPass(pass)" class="card-link">Print</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Pass",
  computed: mapState(["pass", "active_el", "purposeList"]),
  methods: {
    ...mapActions([]),
    deletePass(pass){
      // TODO
      // delete pass from db
      console.log(pass);
    },
     printPass(pass){
      // TODO
      // print/mail pass from db
      console.log(pass);
    }
  },
};
</script>
<style>
</style>
