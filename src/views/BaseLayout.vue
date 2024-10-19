<template>
  <div id="app-content">
    <AppNavbar />
    <router-view :v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from '@/components/Navbar.vue'
import AppFooter from '@/components/Footer.vue'
export default {
  data() {
    return {}
  },
  name: 'base-layout',
  components: { AppNavbar, AppFooter },
}
</script>

<style></style>
