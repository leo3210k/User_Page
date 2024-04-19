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
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = `Token 8d23698c5b30fe6515331ef1ef40e7a903169829`

export default {
  name: "Users",
  components: { PageModel, UsersDialog },
  data() {
    return {
      image_src: no_users,
      basicAuth: "8d23698c5b30fe6515331ef1ef40e7a903169829",
      users: [],
      url: 'https://api-manager-test.infog2.com.br.infog2.com.br/'
    };
  },
  methods: {
    getUsers() {
      axios.get(`${this.url}/a/colaborador/?text=`).then(res => this.users = res.data)
    }
  },
  mounted() {
    this.getUsers()
    console.log(this.users)
  }
}
</script>

<style>

</style>