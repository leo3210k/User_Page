<template>
  <div class="h-svh grid grid-rows-[5rem_1fr]" :class="isMenuVisible ? 'grid-cols-[5.5rem_1fr]' : 'grid-cols-[1fr]' ">
    <Header />
    <SideMenu />
    <slot></slot>
  </div>
</template>

<script>
import Header from '@/components/template/Header.vue'
import SideMenu from '@/components/template/SideMenu.vue'
import { mapState } from 'vuex'

export default {
  name: "PageModel",
  computed: mapState(['isMenuVisible']),
  components: { Header, SideMenu }
}
</script>

<style>

</style>