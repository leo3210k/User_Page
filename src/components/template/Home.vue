<template>
  <PageModel>
    <div class="bg-blue-400">

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
      images_src: [
        config,
        holidays,
        logs,
        messages,
        permissions,
        reason,
        reports,
        segments,
        users,
        versions,
      ],
    }
  }
}
</script>

<style>

</style>