<template>
  <div class="container-fluid mt-2 col-md-12">
    <!-- {{ $route.params }} -->
    <div class="row">
      <div class="col-4">
        <PostList></PostList>
      </div>
      <div class="col-8">
        <Post></Post>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Post from "../components/Post.vue";
import PostList from "../components/PostList.vue";
export default {
  name: "Blog",
  created() {
    this.loadPostList();
  },
  methods: {
    ...mapActions(["loadPostList"]),
  },
  components: {
    Post,
    PostList,
  },
};
</script>
<style>
</style>
