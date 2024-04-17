<template>
  <PageModel>
    <div class="h-40 flex flex-wrap gap-6 m-32">
      <div v-for="(image, index) in images" :key="index"
      class="w-36 h-36 flex flex-col gap-3 justify-center items-center bg-azure-radiance-darker rounded-lg">
        <img :src="image.src" :alt="image.src" class="w-14 h-14">
        <span class="text-base font-bold text-center">{{ image.label }}</span>
      </div>
    </div>
  </PageModel>
</template>

<script>
import PageModel from '@/components/template/PageModel.vue'
import config from '@/assets/svg/home/config.svg'
import holidays from '@/assets/svg/home/holidays.svg'
import logs from '@/assets/svg/home/logs.svg'
import messages from '@/assets/svg/home/messages.svg'
import permissions from '@/assets/svg/home/permissions.svg'
import reason from '@/assets/svg/home/reason.svg'
import reports from '@/assets/svg/home/reports.svg'
import segments from '@/assets/svg/home/segments.svg'
import users from '@/assets/svg/home/users.svg'
import versions from '@/assets/svg/home/versions.svg'


export default {
  name: "Home",
  components: { PageModel },
  data() {
    return {
      images: [
        { src: config, label: 'Configuração' },
        { src: users, label: 'Usuários' },
        { src: permissions, label: 'Permissões' },
        { src: reason, label: 'Motivo de cancelamento' },
        { src: logs, label: 'Logs' },
        { src: segments, label: 'Segmentos' },
        { src: versions, label: 'Versões' },
        { src: holidays, label: 'Feriados' },
        { src: reports, label: 'Laudos' },
        { src: messages, label: 'Mensagens pré-definidas' },
      ],
    }
  }
}
</script>

<style>

</style>