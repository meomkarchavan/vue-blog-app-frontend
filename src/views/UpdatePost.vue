<template>
  <div>
    <form action="">
      <label for="title">
        Title
      </label>
      <input type="text" v-model="post.title" class="form-control">

      <label for="content">
        Content
      </label>
      <textarea type="text" v-model="post.content" class="form-control">
      </textarea>

    </form>
    <button  class="btn btn-primary mt-2">Update</button>
  </div>
</template>

<script>
export default {
  name: "UpdatePost",
  data() {
    return { post:{} };
  },
};  
</script>