<template>
  <div class="flex">
    <img :src="login" class="w-7/12 h-screen" alt="login-image">
    <div class="relative w-5/12 flex flex-col items-center text-4xl font-bold text-black mx-auto mt-48">
      <h1 class="mb-16">Login</h1>
      <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="email">
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
          <a href="" class="text-xl">Esqueceu a senha?</a>
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

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
