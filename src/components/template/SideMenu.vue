<template>
  <div class="flex flex-col bg-azure-radiance">
    <div class="">
      <img v-for="(image_src, index) in images_src" :key="index" :src="image_src" :alt="image_src">
    </div>
    <img :src="logo" alt="logo">
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