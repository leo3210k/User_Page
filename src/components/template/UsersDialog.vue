<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button class="w-10 h-10 flex justify-center items-center text-4xl bg-azure-radiance-darker hover:bg-azure-radiance-darker hover:opacity-85 text-white rounded-md z-10">
        +
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-md p-0">
      <DialogHeader class="w-full p-4 bg-azure-radiance-darker rounded-lg">
        <DialogTitle>Novo Usuário</DialogTitle>
      </DialogHeader>
      <span>Dados Básicos</span>
      <hr>
      <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="text" placeholder="shadcn" v-bind="componentField" />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useForm } from 'vee-validate'

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

<style>

</style>