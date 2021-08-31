<template>
  <div>
    <form action="">
      <label for="title"> Title </label>
      <input type="text" v-model="pass.title" class="form-control" />

      <label for="description"> description </label>
      <textarea type="text" v-model="pass.description" class="form-control">
      </textarea>
    </form>
    <button class="btn btn-primary mt-2">Add</button>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  name: "AddPass",
  data() {
    return { pass: {} };
  },
};
</script>