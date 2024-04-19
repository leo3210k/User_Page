<template>
  <div class="flex">
    <img :src="login" class="w-7/12 h-screen" alt="login-image">
    <div class="relative w-5/12 flex flex-col items-center text-4xl font-bold text-black mx-auto mt-48">
      <h1 class="mb-16">Login</h1>
      <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel class="font-black">Email</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" class="w-[30rem] h-12"/>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel class="font-black">Senha</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" class="w-[30rem] h-12"/>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <div class="flex justify-between items-center mt-10">
          <a href="" class="text-xl hover:border-b-2 border-neutral-900">Esqueceu a senha?</a>
          <Button type="submit" class="h-16 px-20 font-bold">
            Entrar
          </Button>
        </div>
      </form>
      <img :src="loginBackground" class="absolute bottom-0 inset-x-0" alt="login-background">
    </div>
  </div>
</template>

<script setup>
import login from '@/assets/images/login-image.png'
import loginBackground from '@/assets/images/login-background.png'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useForm } from 'vee-validate'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = `application/json`

const url = 'https://api-manager-test.infog2.com.br.infog2.com.br/a/auth/login_colaborador/'
const router = useRouter()

const formSchema = toTypedSchema(z.object({
  username: z.string({
    required_error: "Digite um e-mail",
  }),
  password: z.string({
    required_error: "Digite uma senha",
  }),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  axios.post(url, values).then(res => console.log(res.data))
  router.push({ path: '/' })
})
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
