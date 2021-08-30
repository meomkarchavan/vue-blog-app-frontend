<template>
  <div class="container-fluid mt-2 col-md-12">
    <!-- {{ $route.params }} -->
    <div class="row">
      <div class="col-4">
        <TodoList></TodoList>
      </div>
      <div class="col-8">
        <Todo></Todo>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "../components/Todo.vue";
import TodoList from "../components/TodoList.vue";
export default {
  name: "Blog",

  components: {
    Todo,
    TodoList,
  },
};
</script>
<style>
</style>
