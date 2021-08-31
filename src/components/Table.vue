
<template>
  <div>
    <table class="table" v-if="purposeList != null">
      <thead>
        <tr>
          <th scope="col">PassID</th>
          <th scope="col">UserID</th>
          <th scope="col">User</th>
          <th scope="col">Purpose</th>
          <th scope="col">Approved</th>
          <th scope="col">Rejected</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pass in passList" :key="pass.passid">
          <th scope="row">{{ pass.passid }}</th>
          <td>{{ pass.userid }}</td>
          <td>{{ pass.userfullname }}</td>
          <td>
            {{ pass.purposeid }}
          </td>
          <td>{{ pass.rejected }}</td>
          <td>{{ pass.approved }}</td>
          <td>{{ pass.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Table",
  computed: mapState(["passList", "purposeList"]),
  created() {
    this.loadUserPassList();
    this.loadPurposeList();
  },
  methods: {
    ...mapActions(["loadUserPassList", "loadPurposeList"]),
  },
  data() {
    return { pass: {} };
  },
};
</script>