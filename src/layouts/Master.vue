<template>
  <div>
    <Header v-if="this.$route.meta.header !== false" />
    <main role="main" class="container">
      <slot />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Master",
  components: {
    Header
  }
};
</script>