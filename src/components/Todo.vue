<template>
  <div v-if="todo.title != null">
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.description }}</p>
    <div>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          class="btn btn-success"
          @click="completeTodo(todo)"
        >
          Done
        </button>
        <button type="button" class="btn btn-danger" @click="deleteTodo(todo)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Todo",
  computed: mapState(["todo", "active_el"]),
  methods: {
    ...mapActions(["completeTodo", "deleteTodo"]),
  },
};
</script>
<style>
</style>
