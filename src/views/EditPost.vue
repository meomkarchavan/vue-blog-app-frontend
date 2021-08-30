<template>
  <div>
    Edit
    <form action="">
      <label for="">
        Title
      </label>
      <input type="text" :placeholder="this.post.title" v-model="newData.title">

    </form>
    <button @click="$emit('update', newData.title)">Save</button>
  </div>
</template>

<script>
export default {
  name: "EditPost",
  data() {
    return { post: null,newData:{} };
  },
  watch: {
    $route() {
      this.post = this.$route.params.post;
    },
  },
  mounted() {
    this.post = this.$route.params.post;
  },
};
</script>