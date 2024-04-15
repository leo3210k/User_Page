<template>
  <img :src="imageSrc" class="w-7/12 h-screen" alt="login-image">
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
