<template>
  <div class="container-fluid mt-2 col-md-12">
    <div class="container">
      <div class="row">
        <div class="col">
          <form action="">
            <label for="title"> Title </label>
            <input type="text" v-model="todo.title" class="form-control" />

            <label for="description"> description </label>
            <textarea
              type="text"
              v-model="todo.description"
              class="form-control"
            >
            </textarea>
          </form>
          <button class="btn btn-primary mt-2" @click="addTodo(todo)">
            Add
          </button>
        </div>
      </div>
    </div>

    <div class="container mt-2">
      <div class="row">
        <div class="col-4">
          <TodoList></TodoList>
        </div>
        <div class="col-8">
          <Todo></Todo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Todo from "../components/Todo.vue";
import TodoList from "../components/TodoList.vue";
export default {
  name: "TodoView",
  data() {
    return {
      todo: {},
    };
  },

  methods: {
    ...mapActions(["addTodo"]),
  },
  components: {
    Todo,
    TodoList,
  },
};
</script>
<style>
</style>
