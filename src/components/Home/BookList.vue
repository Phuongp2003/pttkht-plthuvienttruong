<template>
  <div class="book w-[100%]">
    <div class="title">Các tựa sách nổi bật</div>
    <div class="books-list">
      <div class="book" v-for="(book, index) in books" :key="book.id">
        <div
          class="book-wrap"
          :class="index == 0 ? 'red' : ''"
          v-if="index != 2"
        >
          <BookItem :book="book" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookItem from './BookList/BookItem.vue'
export default {
  components: { BookItem },
  data() {
    return {
      books: [
        {
          id: 0,
          name: 'book 1',
          image: '',
        },
        {
          id: 1,
          name: 'book 2',
          image: '',
        },
        {
          id: 2,
          name: 'book 3',
          image: '',
        },
        {
          id: 3,
          name: 'book 4',
          image: '',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.book {
}
.red {
  color: red;
}
</style>
