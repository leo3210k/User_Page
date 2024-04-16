<template>
  <div>
    <Header />
    <SideMenu />
  </div>
</template>

<script>
import Header from '@/components/template/Header.vue'
import SideMenu from '@/components/template/SideMenu.vue'

export default {
  name: "Home",
  components: { Header, SideMenu }
}
</script>

<style>

</style>