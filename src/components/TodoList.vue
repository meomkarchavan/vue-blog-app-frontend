<template>
  <div>
    <div>
      <virtual-list
        style="height: 100vh; overflow-y: auto"
        :data-key="'todoid'"
        :data-sources="todoList"
        :data-component="itemComponent"
      />
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
import VirtualList from "vue-virtual-scroll-list";

import { mapState, mapActions } from "vuex";

export default {
  name: "TodoList",
  computed: mapState(["todoList"]),
  data() {
    return {
      itemComponent: Item,
    };
  },
  created() {
    this.loadTodoList();
  },
  methods: {
    ...mapActions(["loadTodoList"]),
  },
  components: { "virtual-list": VirtualList },
};
</script>
<style>
</style>

