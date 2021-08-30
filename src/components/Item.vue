<template>
  <div
    @click="setTodo(source)"
    class="list-group-item list-group-item-action"
    :class="{
      'bg-success text-white': source.done,
    }"
  >
    <h5>
      {{ source.title }}
    </h5>
  </div>
</template>
 
<script>
import { mapState } from "vuex";

export default {
  name: "item-component",
  computed: mapState(["active_el"]),
  methods: {
    setTodo(todo) {
      this.$store.commit("SET_TODO", todo);
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