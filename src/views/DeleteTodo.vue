<template>
  <div>
    <form action="">
      <label for="title"> Todo Id </label>
      <input type="text" v-model="todo.todoid" class="form-control" />
    </form>
    <button class="btn btn-primary mt-2">Delete</button>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  name: "DeleteTodo",
  data() {
    return { todo: {} };
  },
};
</script>