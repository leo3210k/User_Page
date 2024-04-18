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
      <form @submit="onSubmit" class="flex flex-col gap-6">
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
          <FormField v-slot="{ componentField }" name="cpf">
            <FormItem class="w-full">
              <FormLabel class="text-gray-500">CPF</FormLabel>
              <FormControl>
                <Input type="text" class="h-12 text-black" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="marital_status">
            <FormItem class="w-full">
              <FormLabel class="text-gray-500">Estado Civil</FormLabel>
              <Select v-bind="componentField">
                <SelectTrigger class="h-12 text-black mt-[9px]">
                  <SelectValue />
                </SelectTrigger>
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
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField name="dob">
            <FormItem class="w-full">
              <FormLabel class="text-gray-500">Data de Nascimento</FormLabel>
              <Popover>
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      class="w-full bg-white text-black hover:bg-white border"
                    >
                      <span>{{ value ? df.format(toDate(value)) : "Pick a date" }}</span>
                      <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
                    </Button>
                    <input hidden>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent class="w-auto p-0">
                  <Calendar
                    v-model:placeholder="placeholder"
                    v-model="value"
                    calendar-label="Date of birth"
                    initial-focus
                    :min-value="new CalendarDate(1900, 1, 1)"
                    :max-value="today(getLocalTimeZone())"
                    @update:model-value="(v) => {
                      if (v) {
                        setValues({
                          dob: v.toString(),
                        })
                      }
                      else {
                        setValues({
                          dob: '',
                        })
                      }

                    }"
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="surname">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Apelido</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
          </FormField>
        </div>
        <div>
          <span class="text-black text-lg font-medium">Dados Complementares</span>
          <hr class="mt-2">
        </div>
        <div class="w-full flex flex-col gap-4">
          <div class="flex basis-auto justify-between items-center gap-4">
            <FormField v-slot="{ componentField }" name="profile">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Perfil</FormLabel>
                <Select v-bind="componentField">
                  <SelectTrigger class="h-12 text-black mt-[9px]">
                    <SelectValue />
                  </SelectTrigger>
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
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="function">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Função</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="place_of_birth">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Naturalidade</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <FormField v-slot="{ componentField }" name="pix">
            <FormItem class="w-6/12">
              <FormLabel class="text-gray-500">Chave PIX</FormLabel>
              <FormControl>
                <Input type="text" class="h-12 text-black" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>
        <div>
          <span class="text-black text-lg font-medium">Horário de Trabalho</span>
          <hr class="mt-2">
        </div>
        <div class="flex justify-between">
          <div class="flex">
            <FormField v-slot="{ componentField }" name="surname">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Apelido</FormLabel>
                <FormControl>
                  <VueDatePicker v-model="time" time-picker disable-time-range-validation ref="dp" placeholder="Select Time">
                    <template #action-buttons>
                      <p class="bg-azure-radiance-darker text-white p-2 rounded-md cursor-pointer" @click="selectDate">Selecionar</p>
                    </template>
                  </VueDatePicker>  
                </FormControl>
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="surname">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Apelido</FormLabel>
                <FormControl>
                  <VueDatePicker v-model="time" time-picker disable-time-range-validation ref="dp" placeholder="Select Time">
                    <template #action-buttons>
                      <p class="bg-azure-radiance-darker text-white p-2 rounded-md cursor-pointer" @click="selectDate">Selecionar</p>
                    </template>
                  </VueDatePicker>
                </FormControl>
              </FormItem>
            </FormField>
          </div>
          <div>
            <VueDatePicker v-model="time" time-picker disable-time-range-validation ref="dp" placeholder="Select Time">
              <template #action-buttons>
                <p class="bg-azure-radiance-darker text-white p-2 rounded-md cursor-pointer" @click="selectDate">Selecionar</p>
              </template>
            </VueDatePicker>  
            <VueDatePicker v-model="time" time-picker disable-time-range-validation ref="dp" placeholder="Select Time">
              <template #action-buttons>
                <p class="bg-azure-radiance-darker text-white p-2 rounded-md cursor-pointer" @click="selectDate">Selecionar</p>
              </template>
            </VueDatePicker>
          </div>
        </div>
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
import { computed, h, ref } from 'vue'
import { CalendarDate, DateFormatter, getLocalTimeZone, parseDate, today } from '@internationalized/date'
import { toDate } from 'radix-vue/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import camera from '@/assets/svg/users-dialog/camera.svg'

const cameraSrc = camera

const df = new DateFormatter('pt-BR', {
  dateStyle: 'long',
})

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
  dob: z
    .string()
    .refine(v => v, { message: 'A date of birth is required.' }),
}))

const placeholder = ref()
const time = ref();
const dp = ref();

const selectDate = () => {
  dp.value.selectDate();
}

const { handleSubmit, setValues, values } = useForm({
  validationSchema: formSchema,
  initialValues: {

  },
})

const value = computed({
  get: () => values.dob ? parseDate(values.dob) : undefined,
  set: val => val,
})

const onSubmit = handleSubmit((values) => {
})
</script>

<style>

</style>