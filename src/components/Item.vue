<template>
  <div
    @click="setPost(source)"
    class="list-group-item list-group-item-action"
    :class="{ active: active_el == source.postid }"
  >
    <h5>
      {{ source.title }}
      <!-- <span class="badge rounded-pill bg-primary">{{ source.likes }}</span> -->
    </h5>
  </div>
</template>
 
<script>
import { mapState } from "vuex";

export default {
  name: "item-component",
  computed: mapState(["active_el"]),
  methods: {
    setPost(post) {
      this.$store.commit("setPost", post);
    },
  },
  props: {
    source: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>