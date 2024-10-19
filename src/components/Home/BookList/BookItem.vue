<template>
  <div class="book-wrap">
    this is book card
    <div class="id">
      {{ book.id }}
    </div>
    <div class="name">
      {{ book.name }}
    </div>
  </div>
</template>

<script>
export default {  props: {
    book: { type: Object, required: true },
  },
}
</script>

<style lang="scss">
.red {
  color: red;
}
</style>
