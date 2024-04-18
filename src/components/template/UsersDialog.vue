<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button class="w-10 h-10 flex justify-center items-center text-4xl bg-azure-radiance-darker hover:bg-azure-radiance-darker hover:opacity-85 text-white rounded-md z-10">
        +
      </Button>
    </DialogTrigger>
    <DialogContent class="max-w-[60rem] p-4">
      <DialogHeader class="w-full bg-azure-radiance rounded-lg p-4">
        <DialogTitle class="font-medium text-lg text-white">Novo Usuário</DialogTitle>
      </DialogHeader>
      <form @submit="onSubmit" class="flex flex-col gap-4">
        <div>
          <span class="text-black text-lg font-medium">Dados Básicos</span>
          <hr class="mt-2">
        </div>
        <div class="flex gap-24 mb-6">
          <div class="relative">
            <div class="w-64 h-64 bg-gray-300 rounded-full"></div>
            <div class="absolute right-0 bottom-1 w-20 h-20 flex justify-center items-center bg-azure-radiance-darker rounded-full">
              <img :src="cameraSrc" class="w-10 h-10" :alt="camera">
            </div>
          </div>
          <div class="w-full flex flex-col gap-2">
            <FormField v-slot="{ componentField }" name="name">
              <FormItem>
                <FormLabel class="text-gray-500">Nome</FormLabel>
                <FormControl>
                  <Input type="text" class="w-full h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="mother_name">
              <FormItem>
                <FormLabel class="text-gray-500">Nome da Mãe</FormLabel>
                <FormControl>
                  <Input type="text" class="w-full h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="father_name">
              <FormItem>
                <FormLabel class="text-gray-500">Nome do Pai</FormLabel>
                <FormControl>
                  <Input type="text" class="w-full h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
        </div>
        <div class="w-full flex basis-auto justify-between items-center gap-4">
          <FormField v-slot="{ componentField }" name="father_name">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">CPF</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <Select>
              <div class="w-full">
                <Label class="text-gray-500 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-500" for="email">Estado Civil</Label>
                <SelectTrigger class="h-12 text-black mt-[9px]">
                  <SelectValue />
                </SelectTrigger>
              </div>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="single">
                    Solteiro(a)
                  </SelectItem>
                  <SelectItem value="married">
                    Casado(a)
                  </SelectItem>
                  <SelectItem value="divorced">
                    Divorciado(a)
                  </SelectItem>
                  <SelectItem value="stable_union">
                    União Estável
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormField v-slot="{ componentField }" name="father_name">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Data de Nascimento</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="father_name">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Apelido</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
        </div>
        <span class="text-black text-lg font-medium">Dados Complementares</span>
        <hr>
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useForm } from 'vee-validate'
import camera from '@/assets/svg/users-dialog/camera.svg'

const cameraSrc = camera

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