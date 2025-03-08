const app = Vue.createApp({
  data() {
    return {
      url: "https://www.google.com",
      showBooks: true,
      books: [
        {
          title: "The Lord of the Rings",
          Author: "J.R.R Tolkien",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "The Hobbit",
          Author: "J.R.R Tolkien",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "The Silmarillion",
          Author: "J.R.R Tolkien",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
