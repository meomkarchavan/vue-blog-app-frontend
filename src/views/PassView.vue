<template>
  <div class="container-fluid mt-2 col-md-12">
 
    <div class="container mt-2">
      <div class="row">
        <div class="col-4">
          <PassList/>
        </div>
        <div class="col-8">
          <Pass/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Pass from "../components/Pass.vue";
import PassList from "../components/PassList.vue";
export default {
  name: "PassView",
  data() {
    return {
      pass: {},
    };
  },

  methods: {
    ...mapActions(["addTodo"]),
  },
  components: {
    Pass,
    PassList,
  },
};
</script>
<style>
</style>
