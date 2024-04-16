<template>
  <div class="flex flex-col justify-between items-center bg-azure-radiance py-10">
    <div class="flex flex-col items-center gap-10">
      <img v-for="(image_src, index) in images_src" :key="index" :src="image_src" :alt="image_src"
      class="w-10 h-10">
    </div>
    <img :src="logo" class="w-10 h-10" alt="logo">
  </div>
</template>

<script>
import first_icon from '@/assets/svg/sidebar/firstIcon.svg'
import second_icon from '@/assets/svg/sidebar/secondIcon.svg'
import third_icon from '@/assets/svg/sidebar/thirdIcon.svg'
import fourth_icon from '@/assets/svg/sidebar/fourthIcon.svg'
import fifth_icon from '@/assets/svg/sidebar/fifthIcon.svg'
import sixth_icon from '@/assets/svg/sidebar/sixthIcon.svg'
import logo from '@/assets/svg/sidebar/logo.svg'

export default {
  name: "SideMenu",
  data() {
    return {
      images_src: [
        first_icon,
        second_icon,
        third_icon,
        fourth_icon,
        fifth_icon,
        sixth_icon,
      ],
      logo
    };
  }
}
</script>

<style>

</style>