<template>
  <div>
    <Header v-if="this.$route.meta.header !== false" />
    <main role="main" class="container">
      <slot />
    </main>
    <Footer v-if="this.$route.meta.footer !== false" />
  </div>
</template> 

<script>
import Header from "@/components/Admin/Header";
import Footer from "@/components/Admin/Footer";
export default {
  name: "Master",
  components: {
    Header,
    Footer 
  }
};
</script>