
<template>
  <div>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/dashboard/table" class="nav-link active"
          >Table</router-link
        >
      </li>
    </ul>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>