<template>
  <PageModel>
    <div class="relative flex flex-col m-10 gap-4">
      <div class="flex items-center gap-6">
        <span class="text-black text-2xl font-medium">Usuários</span>
        <UsersDialog />
      </div>
      <div v-if="users.length==0" class="absolute inset-1 flex flex-col justify-center items-center gap-6 text-gray-400">
        <img :src="image_src" class="w-64 h-64" :alt="image_src">
        <span>Não há usuários. Clique no ícone acima para adicionar</span>
      </div>
      <div v-else v-for="(user, index) in users" :key="index" class="flex justify-around shadow-md bg-white text-black text-sm font-bold rounded-md px-10 py-6">
        <div class="flex flex-col">
          <span class="text-base">{{ user.nome }}</span>
          <span>{{ user.perfil_str }}</span>
        </div>
        <div class="flex items-center">
          <span class="bg-ice-cold text-observatory px-4 py-1 rounded-md">
            {{ user.status }}
          </span>
        </div>
        <div class="flex items-center gap-2">
          <img :src="shopSrc" class="w-8" alt="shopSrc">
          <span>{{ user.cpf_cnpj_formatado }}</span>
        </div>
        <div class="flex items-center gap-2">
          <img :src="locationSrc" class="w-8" alt="locationSrc">
          <div class="flex flex-col">
            <span>{{ user.endereco_residencial }} </span>
            <span>{{ user.cidade }}</span>
          </div>
        </div>
      </div>
    </div>
  </PageModel>
</template>

<script>
import PageModel from '@/components/template/PageModel.vue'
import UsersDialog from '@/components/template/UsersDialog.vue'
import no_users from '@/assets/images/no-users.png'
import shop from '@/assets/svg/users/shop.svg'
import location from '@/assets/svg/users/location.svg'
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = `Token 8d23698c5b30fe6515331ef1ef40e7a903169829`

export default {
  name: "Users",
  components: { PageModel, UsersDialog },
  data() {
    return {
      image_src: no_users,
      users: {},
      url: 'https://api-manager-test.infog2.com.br.infog2.com.br/',
      shopSrc: shop,
      locationSrc: location,
    };
  },
  methods: {
    getUsers() {
      axios.get(`${this.url}/a/colaborador/?text=`).then(res => this.users = res.data.results)
    }
  },
  mounted() {
    this.getUsers()
  }
}
</script>

<style>

</style>