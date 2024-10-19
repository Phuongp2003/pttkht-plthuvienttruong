<template>
  <div id="app-main-content" class="container w-[100%]">
    <div class="main-section-wrap">
      <div class="main-section">
        <banner-item-vue />
        <book-list />
        <div class="cooperations w-[100%]">coop</div>
      </div>
    </div>
    <div class="side-board">side board</div>
  </div>
</template>

<script>
import BannerItemVue from '@/components/Home/BannerItem.vue'
import BookList from '@/components/Home/BookList.vue'
export default {
  name: 'home-page',
  components: { BannerItemVue, BookList },
}
</script>

<style lang="scss">
#app-main-content {
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 40px);
  .main-section-wrap {
    width: 80%;
    margin: 0 auto;
    .main-section {
      background-color: rgba($color: red, $alpha: 0.4);
      .book {
        background-color: rgba($color: pink, $alpha: 0.4);
        width: 100%;
      }
      .cooperations {
        background-color: rgba($color: purple, $alpha: 0.4);
        width: 100%;
      }
    }
    .side-board {
      background-color: rgba($color: blue, $alpha: 0.4);
    }
  }
}
</style>
