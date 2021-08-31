<template>
  <div>
    <div>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="pass in passList"
          :key="pass.passid"
          @click="setPass(pass)"
        >
          {{ pass.userfullname }}
          {{ pass.approved }}
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
  computed: mapState(["passList"]),

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

