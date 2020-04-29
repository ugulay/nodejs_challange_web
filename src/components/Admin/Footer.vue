<template>
  <footer class="container">
    <button @click="logout" class="btn btn-sm btn-outline-danger mt-3">Logout</button>
  </footer>
</template>

<script>
import store from "@/store";
import router from "@/router";

export default {
  methods: {
    logout: async () => {
      await store.dispatch("auth/logout");
      router.push({ name: "Index" });
    }
  }
};
</script>