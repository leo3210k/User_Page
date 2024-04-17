<template>
  <PageModel>
    <div class="m-10">
      <div class="flex">
        <span class="text-black text-2xl font-medium">Usuários</span>
        <div class="w-10 h-10 flex justify-center items-center text-4xl bg-azure-radiance-darker text-white rounded-md">+</div>
      </div>
    </div>
  </PageModel>
</template>

<script>
import PageModel from '@/components/template/PageModel.vue'

export default {
  name: "Users",
  components: { PageModel },
  data() {
    return {
    };
  }
}
</script>

<style>

</style>