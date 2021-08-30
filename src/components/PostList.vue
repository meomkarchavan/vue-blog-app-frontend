<template>
  <div>
    <div>
      <virtual-list
        style="height: 100vh; overflow-y: auto"
        :data-key="'postid'"
        :data-sources="postList"
        :data-component="itemComponent"
      />
    </div>
  </div>
</template>

<script>
import Item from "../components/Item.vue";
import VirtualList from "vue-virtual-scroll-list";

import { mapState,mapActions } from "vuex";

export default {
  name: "Post",
  computed: mapState(["postList"]),
  data() {
    return {
      itemComponent: Item,
    };
  },
  created() {
    this.loadPostList();
  },
  methods: {
    ...mapActions(["loadPostList"]),
  },
  components: { "virtual-list": VirtualList },
};
</script>
<style>
</style>

