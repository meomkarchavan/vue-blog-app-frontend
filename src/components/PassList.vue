<template>
  <div>
    <div>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="pass in passList"
          :key="pass.passid"
          @click="setPass(pass)"
          :class="{
            'list-group-item-info': pass.purposeid == 0,
            'list-group-item-warning': pass.purposeid == 1,
            'list-group-item-danger': pass.purposeid == 2,
          }"
        >
          {{ pass.userfullname }}
          {{ pass.date.split("T")[0] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "PassList",
  computed: mapState(["passList", "purposeList"]),

  created() {
    this.loadUserPassList();
  },
  methods: {
    ...mapActions(["loadUserPassList"]),
    setPass(pass) {
      this.$store.commit("SET_PASS", pass);
    },
  },
};
</script>
<style>
</style>

