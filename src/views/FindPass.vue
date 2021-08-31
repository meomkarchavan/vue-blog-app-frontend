<template>
  <div>
    <form action="">
      <label for="title"> Pass Id </label>
      <input type="text" v-model="pass.passid" class="form-control" />
    </form>
    <button class="btn btn-primary mt-2">Find</button>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  name: "FindPass",
  data() {
    return { pass: {} };
  },
};
</script>