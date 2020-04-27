<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <form name="form" @submit.prevent="handleLogin">
            <div class="form-group">
              <label for="username">E-Mail</label>
              <input v-model="user.email" type="text" class="form-control" name="email" />
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input v-model="user.password" type="password" class="form-control" name="password" />
            </div>

            <div class="form-group">
              <button class="btn btn-primary btn-block" type="submit">
                <span>Login</span>
              </button>
            </div>

            <div class="form-group">
              <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "@/models/user";

export default {
  name: "Login",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: ""
    };
  },
  computed: {
    loggedIn() { 
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push({ name: "AdminIndex" });
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;

      if (this.user.email && this.user.password) {
        this.$store.dispatch("auth/login", this.user).then(
          () => {
            this.$router.push({ name: "AdminIndex" });
          },
          error => {
            this.loading = false;
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      }
    }
  }
};
</script>