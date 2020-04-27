<template>
  <div class="hotels" v-cloak>
    <div class="card">
      <div class="card-header">
        <span class="card-title">
          Selected Hotel:
          <strong>{{ hotel.title }}</strong>
          , {{ hotel.location }}
        </span>
      </div>
      <div class="card-body">
        <div class="alert alert-info">
          <h3>
            Please note your reservation code.
          </h3>
          <hr>
          Your reservation code :
          <strong>{{ data.code }}</strong>     

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookComplete",
  data() {
    return {
      hotel: this.$route.params.hotel,
      reserve: this.$route.params.reserve,
      data: this.$route.params.data
    };
  }
};
</script>
