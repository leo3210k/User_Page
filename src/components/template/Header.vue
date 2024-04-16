<template>
  <div class="h-20 flex items-center bg-lochmara px-6">
    <img :src="imageSrc" class="w-10 h-10" alt="menu-icon">
    <div class="flex justify-between grow">
      <span class="text-2xl text-white font-black capitalize">utilitários</span>
      <span class="text-2xl text-white font-black capitalize">manager</span>
    </div>
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