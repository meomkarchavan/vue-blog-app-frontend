<template>
  <div class="container-fluid">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/crud-todo/add-todo" class="nav-link active"
          >Add</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/crud-todo/delete-todo" class="nav-link active"
          >Delete</router-link
        >
      </li>

      <li class="nav-item">
        <router-link to="/crud-todo/update-todo" class="nav-link active">
          Update
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/crud-todo/find-todo" class="nav-link active">
          Find
        </router-link>
      </li>
    </ul>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "CrudTodo",
};
</script>

