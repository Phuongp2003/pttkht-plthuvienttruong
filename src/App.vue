<template>
  <div id="app-content" class="min-h-[100vh]">
    <AppNavbar />
    <!-- <router-view :v-slot="{ Component }">
      <component :is="Component" />
    </router-view> -->
    <RouterView />
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from '@/components/Navbar.vue'
import AppFooter from '@/components/Footer.vue'
export default {
  components: { AppNavbar, AppFooter },
}
</script>

<style></style>
