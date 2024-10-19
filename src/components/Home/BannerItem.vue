<template>
  <div class="banner w-[100%]">
    <div class="overlay"></div>
    <div class="title">
      Đăng ký tài khoản để sử dụng đầy đủ các dịch vụ của thư viện trường PTIT
      ngay!
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.banner {
  position: relative;
  background-image: url('/R.jpg');
  background-size: cover;
  width: 100%;
  height: 300px;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.4);
  }
  .title {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    color: white;
  }
}
</style>
