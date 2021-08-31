<template>
  <div class="container-fluid mt-2 col-md-12">
    <form >
      <label for="exampleFormControlSelect1">Select Purpose of Visit</label>
      <select
        v-model="passInfo.purposeid"
        class="form-control"
        id="exampleFormControlSelect1"
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
    <button class="btn btn-primary mt-2" @click.prevent="printDate">
      Apply
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ApplyPass",
  computed: mapState(["purposeList"]),
  data() {
    return {
      passInfo: {
        date: new Date(),
      },
    };
  },
  created() {
    this.loadPurposeList();
  },
  methods: {
    ...mapActions(["loadPurposeList"]),
    printDate() {
      console.log(this.passInfo);
    },
  },
};
</script>
<style>
</style>
