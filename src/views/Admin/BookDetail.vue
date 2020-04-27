<template>
  <div class="books" v-cloak>
    <div class="card">
      <div class="card-header">
        <span class="card-title">Book Detail : {{ data.code }}</span>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <tr>
            <td>Reservation Code</td>
            <td>{{ data.code }}</td>
          </tr>
          <tr>
            <td>Hotel</td>
            <td>{{ data.hotel.title }}, {{ data.hotel.location }}</td>
          </tr>
          <tr>
            <td>Check-in</td>
            <td>{{ data.date_start}}</td>
          </tr>
          <tr>
            <td>Check-Out</td>
            <td>{{ data.date_end }}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{{ data.status == 1 ? 'Approved' : 'Waiting'}}</td>
          </tr>
          <tr>
            <td>Room</td>
            <td>{{ data.room}}</td>
          </tr>
          <tr>
            <td>Persons</td>
            <td>{{ data.persons}}</td>
          </tr>
          <tr>
            <td>Contact</td>
            <td>{{ data.contact.nameSurname }} - {{ data.contact.mobile }} - {{ data.contact.email }}</td>
          </tr>
        </table>

        <div class="alert alert-danger" v-if="error">{{ error }}</div>
        
        <div class="alert alert-warning" v-if="message">{{ message }}</div>

        <button v-on:click="approve()" class="btn btn-outline-success">Approve</button>
        <button v-on:click="decline()" class="btn btn-outline-danger">Decline</button>

      </div>
    </div>
  </div>
</template>

<script>
import BookService from "@/services/book.service";

export default {
  name: "AdminBookDetail",
  data() {
    return {
      data: this.$route.params.data,
      updated: false,
      loading: false,
      message : "",
      error: ""
    };
  },
  methods: {
    async approve() {
      this.loading = true;
      this.message = "";
      let result = await BookService.update(this.data, { status: true });
      if (result) {
        this.loading = false;
        this.message = "Reservation approved";
      } else {
        this.error = "error";
      }
    },
    async decline() {
      this.loading = true;
      this.message = "";
      let result = await BookService.update(this.data, { status: false });
      if (result) {
        this.loading = false;
        this.message = "Reservation declined";
      } else {
        this.error = "error";
      }
    }
  }
};
</script>
