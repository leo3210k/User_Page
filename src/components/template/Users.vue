<template>
  <PageModel>
    <div class="relative flex flex-col m-10">
      <div class="flex items-center gap-6">
        <span class="text-black text-2xl font-medium">Usuários</span>
        <div class="w-10 h-10 flex justify-center items-center text-4xl bg-azure-radiance-darker text-white rounded-md">+</div>
      </div>
      <div class="absolute inset-1 flex flex-col justify-center items-center gap-6 text-gray-400">
        <img :src="image_src" class="w-64 h-64" :alt="image_src">
        <span>Não há usuários. Clique no ícone acima para adicionar</span>
      </div>
    </div>
  </PageModel>
</template>

<script>
import PageModel from '@/components/template/PageModel.vue'
import no_users from '@/assets/images/no-users.png'

export default {
  name: "Users",
  components: { PageModel },
  data() {
    return {
      image_src: no_users,
    };
  }
}
</script>

<style>

</style>