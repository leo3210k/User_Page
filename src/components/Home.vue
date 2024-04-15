<template>
  <div class="flex">
    <img :src="imageSrc" class="w-7/12 h-screen" alt="login-image">
    <div class="flex flex-col text-4xl font-bold text-black m-auto">
      <h1>Login</h1>
    </div>
  </div>
</template>

<script>
import login from '@/assets/images/login-image.png'

export default {
  name: "App",
    // components: { Header, Menu, Content, Footer, Loading },
    // computed: mapState(['isMenuVisible', 'user']),
    data: function() {
      return {
        imageSrc: login
      }
    },
  }
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
