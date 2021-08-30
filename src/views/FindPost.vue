<template>
  <div>
    <form action="">
      <label for="title">
        Post Id
      </label>
      <input type="text" v-model="post.postid" class="form-control">


    </form>
    <button  class="btn btn-primary mt-2">Find</button>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  name: "FindPost",
  data() {
    return { post:{} };
  },
};  
</script>