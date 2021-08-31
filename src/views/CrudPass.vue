<template>
  <div class="container-fluid">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/crud-pass/add-pass" class="nav-link active"
          >Add</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/crud-pass/delete-pass" class="nav-link active"
          >Delete</router-link
        >
      </li>

      <li class="nav-item">
        <router-link to="/crud-pass/update-pass" class="nav-link active">
          Update
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/crud-pass/find-pass" class="nav-link active">
          Find
        </router-link>
      </li>
    </ul>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "CrudPass",
};
</script>

