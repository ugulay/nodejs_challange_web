<template>
  <header class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Admin</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link
              :to="{ name: 'AdminIndex'}"
              class="nav-link"
              active-class="text-danger"
            >Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'AdminHotels'}"
              class="nav-link"
              active-class="text-danger"
            >Hotels</router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'AdminBooks'}"
              class="nav-link"
              active-class="text-danger"
            >Bookings</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push({ name: "Login" });
    }
  }
};
</script>