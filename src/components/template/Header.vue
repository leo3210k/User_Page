<template>
  <div class="col-span-2 flex items-center bg-lochmara px-6 gap-x-14">
    <img :src="image_src" class="w-10 h-10" alt="menu-icon">
    <div class="flex justify-between text-2xl text-white font-black capitalize grow">
      <div>
        <span>utilitários</span>
        /
        <span>Usuários</span>
      </div>
      <span>manager</span>
    </div>
  </div>
</template>

<script>
import menu_hamburguer from '@/assets/svg/menu-hamburguer.svg'

export default {
  name: "Header",
  data() {
    return {
      image_src: menu_hamburguer
    };
  }
}
</script>

<style>

</style>