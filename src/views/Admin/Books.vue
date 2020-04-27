<template>
  <div class="books" v-cloak>
    <div class="card">
      <div class="card-header">
        <span class="card-title">Books</span>
      </div>
      <div class="card-body">
        <div v-if="loading" class="text-center p-5">
          <h3>Loading</h3>
        </div>
        <div v-if="books.length">
          <table class="table table-striped">
            <tr>
              <td>Code</td>
              <td>Status</td>
              <td>Hotel</td>
              <td>Check-in</td>
              <td>Check-out</td>
              <td>Room</td>
              <td>Persons</td>
            </tr>

            <tr v-for="book in books" :key="book._id">
              <td>
                <router-link
                  :to="{ name: 'AdminBookDetail' , params: { data : book } }"
                >{{ book.code }}</router-link>
              </td>
              <td>{{ book.status == 1 ? 'Approved' : 'Waiting' }}</td>
              <td>{{ book.hotel.title }}</td>
              <td>{{ book.date_start }}</td>
              <td>{{ book.date_end }}</td>
              <td>{{ book.room }}</td>
              <td>{{ book.persons }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookService from "@/services/book.service";

export default {
  name: "Books",
  data() {
    return {
      loading: false,
      books: []
    };
  },
  created: function() {
    this.loadBooks();
  },
  methods: {
    async loadBooks() {
      this.loading = true;
      this.books = await BookService.getAll();
      this.loading = false;
    }
  }
};
</script>
