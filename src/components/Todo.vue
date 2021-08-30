<template>
  <div>
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.description }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Todo",
  computed: mapState(["todo", "active_el"]),
  methods: {
    markDone(todo) {
      console.log(todo);
    },
  },
};
</script>
<style>
</style>
