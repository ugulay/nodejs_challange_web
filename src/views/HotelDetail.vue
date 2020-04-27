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
        <div class="alert alert-info">{{ hotel.description }}</div>
      </div>
    </div>

    <div class="card mt-3">
      <div class="card-header">
        <span class="card-title">Reservation</span>
      </div>

      <div class="card-body">
        <form name="form" @submit.prevent="bookHandler">
          <div class="row">
            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                Persons
                <input type="number" v-model="reserve.persons" class="form-control" min="1" />
              </div>
            </div>

            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                Rooms
                <select v-model="reserve.room" class="form-control">
                  <option value="1">1 Room</option>
                  <option value="1couple">1 Room (Couple)</option>
                  <option value="1coupleChild">1 Room (Couple+Child)</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                  <option value="3plus">More than 3 Rooms</option>
                </select>
              </div>
            </div>

            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                Check-in Date
                <input type="date" v-model="reserve.date_start" class="form-control" />
              </div>
            </div>

            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                Check-out Date
                <input type="date" v-model="reserve.date_end" class="form-control" />
              </div>
            </div>
          </div>

          <div class="form-group">
            Name Surname
            <input
              type="text"
              v-model="reserve.contact.nameSurname"
              class="form-control"
            />
          </div>

          <div class="form-group">
            Mobile
            <input type="text" v-model="reserve.contact.mobile" class="form-control" />
          </div>

          <div class="form-group">
            E-Mail
            <input type="text" v-model="reserve.contact.email" class="form-control" />
          </div>

          <div class="alert alert-danger" v-if="error">{{ error }}</div>

          <div class="form-group text-right">
            <button class="btn btn-outline-danger">BOOK NOW!</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BookService from "../services/book.service";

/**
 *
 * USED DEFAULT HTML5 DATE INPUT BC THIS IS CHALLANGE
 *
 */

export default {
  name: "HotelDetail",
  data() {
    return {
      hotel: this.$route.params.hotel,
      reserve: {
        persons: 1,
        room: 1,
        date_start: "",
        date_end: "",
        contact: {}
      },
      error: ""
    };
  },
  methods: {
    async bookHandler() {
      this.error = "";
      let result = await BookService.addBook(this.hotel, this.reserve);
      console.log(result);
      if (result.code) {
        localStorage.setItem("lastReservation", JSON.stringify(result));
        this.$router.push({
          name: "BookComplete",
          params: { hotel: this.hotel, reserve: this.reserve, data: result }
        });
      } else {
        this.error = "Error";
      }
    }
  }
};
</script>
