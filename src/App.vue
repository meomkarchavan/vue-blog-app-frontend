<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Blog App</a>
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
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link
              :to="{ name: 'Blog' }"
              class="nav-link active"
              >Blog</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link active"
              >About Us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link active">
              Contact Us
            </router-link>
          </li>
           <li class="nav-item">
            <router-link to="/login" class="nav-link active">
              Login 
            </router-link>
          </li>
        </ul>
        
      </div>
    </nav>
        <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
  },
  created() {
    this.loadPostList();
  },
  methods: {
    ...mapActions(["loadPostList"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
