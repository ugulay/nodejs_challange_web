<template>
  <div class="hotels" v-cloak>
    <div class="card">
      <div class="card-header">
        <span class="card-title">Search hotels for booking:</span>
      </div>
      <div class="card-body">
        <form name="form" @submit.prevent="handleSearch">
          <div class="input-group">
            <input type="text" class="form-control" v-model="search" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="submit">Search</button>
            </div>
          </div>
        </form>
        <div v-if="loading" class="text-center p-5">
          <h3>Loading</h3>
        </div>
        <div v-if="hotels.length">
          <table class="table table-striped">
            <tr>
              <td></td>
              <td>Name</td>
              <td>Description</td>
              <td>Location</td>
            </tr>

            <tr v-for="hotel in hotels" :key="hotel._id">
              <td>
                <router-link
                  :to="{ name : 'HotelDetail' , params:{ hotel : hotel } }"
                >RENT A ROOM NOW!</router-link>
              </td>
              <td>{{ hotel.title }}</td>
              <td>{{ hotel.description }}</td>
              <td>{{ hotel.location }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HotelService from "../services/hotel.service";

export default {
  name: "Hotels",
  data() {
    return {
      search: "",
      loading: false,
      hotels: []
    };
  },
  methods: {
    async handleSearch() {
      this.loading = true;
      this.hotels = await HotelService.getHotelsByName(this.search);
      localStorage.setItem("lastSearch", this.search);
      localStorage.setItem("lastSearchData", JSON.stringify(this.hotels));
      this.loading = false;
    }
  },
  created() {
    if (localStorage.getItem("lastSearch")) {
      this.search = localStorage.getItem("lastSearch");
    }
    if (localStorage.getItem("lastSearchData")) {
      this.hotels = JSON.parse(localStorage.getItem("lastSearchData"));
    }
  }
};
</script>
