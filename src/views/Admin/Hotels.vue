<template>
  <div class="hotels" v-cloak>
    <div class="card">
      <div class="card-header">
        <span class="card-title">Hotels</span>
      </div>
      <div class="card-body">
        <form name="form" @submit.prevent="addHotel">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              v-model="hotel.title"
              placeholder="Hotel Title"
              required="required"
            />
          </div>
          <div class="form-group">
            <textarea
              type="text"
              class="form-control"
              v-model="hotel.description"
              placeholder="Description"
              required="required"
            ></textarea>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              v-model="hotel.location"
              placeholder="Hotel Location"
              required="required"
            />
          </div>
          <div class="form-group text-right">
            <button class="btn btn-outline-secondary" type="submit">Add</button>
          </div>
        </form>
        <div v-if="loading" class="text-center p-5">
          <h3>Loading</h3>
        </div>
        <div v-if="hotels.length">
          <table class="table table-striped">
            <tr>
              <td>Name</td>
              <td>Description</td>
              <td>Location</td>
            </tr>

            <tr v-for="hotel in hotels" :key="hotel._id">
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
import HotelService from "@/services/hotel.service";

export default {
  name: "Hotels",
  data() {
    return {
      hotel: {},
      loading: false,
      hotels: []
    };
  },
  created: function() {
    this.loadHotels();
  },
  methods: {
    async loadHotels() {
      this.loading = true;
      this.hotels = await HotelService.getAll();
      this.loading = false;
    },
    async addHotel() {
      this.loading = true;
      this.hotels = await HotelService.addHotel(this.hotel);
      this.loading = false;
      this.loadHotels();
    }
  }
};
</script>
