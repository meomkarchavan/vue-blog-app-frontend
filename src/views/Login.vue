<template>
  <div>
    <form action="">
      <label for="username">
        username
      </label>
      <input type="text" v-model="user.username" class="form-control">

      <label for="">
        password
      </label>
      <input type="text" v-model="user.password" class="form-control">

    </form>
    <button @click="Login"  class="btn btn-primary mt-2">Login</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Login",
  data() {
    return { user:{} };
  },
  methods: {
    ...mapActions(["login"]),
    Login(){
        this.login(this.user)
    }
  },
};  
</script>