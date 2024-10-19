<template>
  <div id="app-navbar" class="flex flex-row gap-2 h-[30px] bg-green-300">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/auth/login">Login</router-link>
    <router-link to="/auth/signup">Signup</router-link>
  </div>
</template>

<script>
export default {
  name: 'app-navbar',
}
</script>

<style>
#app-navbar {
  color: blue;
}
</style>
