<template>
  <PageModel>
    <div class="relative flex flex-col m-10">
      <div class="flex items-center gap-6">
        <span class="text-black text-2xl font-medium">Usuários</span>
        <UsersDialog />
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
import UsersDialog from '@/components/template/UsersDialog.vue'
import no_users from '@/assets/images/no-users.png'

export default {
  name: "Users",
  components: { PageModel, UsersDialog },
  data() {
    return {
      image_src: no_users,
      users: [],
      url: 'https://api-manager-test.infog2.com.br.infog2.com.br/'
    };
  },
  methods: {
    getUsers() {
      axios.get(`${this.url}/a/colaborador/?text=`).then(res => this.stat = res.data)
    }
  },
  mounted() {
    this.getUsers()
    console.log(users)
  }
}
</script>

<style>

</style>