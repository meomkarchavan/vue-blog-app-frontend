<template>
  <div class="container-fluid mt-2 col-md-12">
    <form>
      <div v-if="isAdmin">
        <label for="userId">User Id</label>
        <input type="text" class="form-control" v-model="passInfo.userid" />
      
      <input class=" mt-2" type="checkbox" v-model="passInfo.approved" />
      <label class="form-check-label  mt-2">  Approve </label>
      
      </div>
      
      <label for="controlSelect">Select Purpose of Visit</label>
      <select
        v-model="passInfo.purposeid"
        class="form-control"
        id="controlSelect"
      >
        <option selected>Select</option>

        <option
          v-for="purpose in purposeList"
          :key="purpose.purposeid"
          :value="purpose.purposeid"
        >
          {{ purpose.title }}
        </option>
      </select>
      <input type="date" class="form-control" v-bind="passInfo.date" />
    </form>
    <button class="btn btn-primary mt-2" @click.prevent="Apply">Apply</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ApplyPass",
  computed: mapState(["purposeList", "user", "isAdmin"]),
  data() {
    return {
      passInfo: {
        date: new Date(),
      },
    };
  },
  methods: {
    ...mapActions(["applyPass"]),
    Apply() {
      this.passInfo.userid = this.user.userid;
      this.passInfo.userfullname = this.user.firstName + this.user.lastName;
      this.applyPass(this.passInfo);
    },
  },
};
</script>
<style>
</style>
