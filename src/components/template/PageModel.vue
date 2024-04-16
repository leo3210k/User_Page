<template>
  <div class="h-svh grid grid-rows-[5rem_1fr] grid-cols-[5.5rem_1fr]">
    <Header />
    <SideMenu />
  </div>
</template>

<script>
import Header from '@/components/template/Header.vue'
import SideMenu from '@/components/template/SideMenu.vue'

export default {
  name: "PageModel",
  components: { Header, SideMenu }
}
</script>

<style>

</style>