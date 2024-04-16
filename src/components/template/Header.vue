<template>
  <div class="h-20 bg-lochmara">
    <img :src="imageSrc" class="w-10 h-10" alt="menu-icon">
  </div>
</template>

<script>
import menu_hamburguer from '@/assets/svg/menu-hamburguer.svg'

export default {
  name: "Header",
  data() {
    return {
      imageSrc: menu_hamburguer
    };
  }
}
</script>

<style>

</style>