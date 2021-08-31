<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item" v-if="!isAdmin">
            <router-link :to="{ name: 'Pass' }" class="nav-link">
              Your Passes
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'ApplyPass' }" class="nav-link">
              <span v-if="isAdmin"> Add Pass </span>
              <span v-else> Apply for Pass </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/crud-todo" class="nav-link" v-if="isAdmin">
              Curd
            </router-link>
          </li>
          <li class="nav-item" v-if="!isSignedIn">
            <router-link to="/login" class="nav-link"> Login </router-link>
          </li>
          <li class="nav-item" v-else>
            <a class="nav-link" @click="logOut()"> LogOut </a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {},
  computed: mapState(["isSignedIn", "isAdmin"]),
  created() {
    this.checkToken();
    this.loadPurposeList();
  },
  methods: {
    ...mapActions(["checkToken", "logOut", "loadPurposeList"]),
  },
};
</script>

<style>
</style>
