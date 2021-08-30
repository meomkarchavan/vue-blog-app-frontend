<template>
  <div>
    <form action="">
      <label for="title"> Title </label>
      <input type="text" v-model="todo.title" class="form-control" />

      <label for="description"> description </label>
      <textarea type="text" v-model="todo.description" class="form-control">
      </textarea>
    </form>
    <button class="btn btn-primary mt-2">Update</button>
  </div>
</template>

<script>
export default {
  name: "UpdateTodo",
  data() {
    return { todo: {} };
  },
};
</script>