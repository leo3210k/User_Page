<template>
  <div class="flex">
    <img :src="login" class="w-7/12 h-screen" alt="login-image">
    <div class="flex flex-col items-center text-4xl font-bold text-black mx-auto mt-48">
      <h1 class="mb-16">Login</h1>
      <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="text" placeholder="shadcn" v-bind="componentField" class="w-[30rem] h-12"/>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel>Senha</FormLabel>
            <FormControl>
              <Input type="text" placeholder="shadcn" v-bind="componentField"  class="w-[30rem] h-12"/>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <div class="flex justify-between items-center mt-10">
          <a href="" class="text-xl">Esqueceu a senha?</a>
          <Button type="submit" class="h-16 px-20">
            Entrar
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import login from '@/assets/images/login-image.png'
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
