<template>
  <Dialog :open="isDialogOpen">
    <DialogTrigger as-child>
      <Button @click="toggleDialog" class="w-10 h-10 flex justify-center items-center text-4xl bg-azure-radiance-darker hover:bg-azure-radiance-darker hover:opacity-85 text-white rounded-md z-10">
        +
      </Button>
    </DialogTrigger>
    <DialogContent class="max-w-[60rem] p-4">
      <DialogScrollContent class="max-w-[60rem]">
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
              <FormField v-slot="{ componentField }" name="username">
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
          <div class="w-full flex basis-auto justify-between items-baseline gap-4">
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
                        class="w-full h-12 bg-white text-black hover:bg-white border"
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
            <div class="flex basis-auto justify-between items-baseline gap-4">
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
          <span class="text-black text-md font-normal">Dias da Semana</span>
          <div class="flex justify-between">
            <div class="w-5/12 flex gap-2">
              <FormField v-slot="{ componentField }" name="start_time">
                <FormItem class="w-full flex flex-col">
                  <FormLabel class="text-gray-500">Início</FormLabel>
                  <FormControl>
                    <input type="time" class="h-12 border-b-2 text-black" min="09:00" max="18:00" v-bind="componentField" />
                  </FormControl>
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="end_time">
                <FormItem class="w-full flex flex-col">
                  <FormLabel class="text-gray-500">Fim</FormLabel>
                  <FormControl>
                    <input type="time" class="h-12 border-b-2 text-black" min="09:00" max="18:00" v-bind="componentField" />
                  </FormControl>
                </FormItem>
              </FormField>
            </div>
            <div class="w-5/12 flex gap-2">
              <FormField v-slot="{ componentField }" name="saturday_start_time">
                <FormItem class="w-full flex flex-col">
                  <FormLabel class="text-gray-500">Início</FormLabel>
                  <FormControl>
                    <input type="time" class="h-12 border-b-2 text-black" min="09:00" max="18:00" v-bind="componentField" />
                  </FormControl>
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="saturday_end_time">
                <FormItem class="w-full flex flex-col">
                  <FormLabel class="text-gray-500">Fim</FormLabel>
                  <FormControl>
                    <input type="time" class="h-12 border-b-2 text-black" min="09:00" max="18:00" v-bind="componentField" />
                  </FormControl>
                </FormItem>
              </FormField>
            </div>
          </div>
          <div>
            <span class="text-black text-lg font-medium">Documentos</span>
            <hr class="mt-2">
          </div>
          <div class="flex basis-auto justify-between items-center gap-4">
            <FormField v-slot="{ componentField }" name="id">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Numero identidade</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="UF_identity">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Orgão emissor identidade</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="id_UF">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">UF identidade</FormLabel>
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
          </div>
          <div class="flex basis-auto justify-between items-center gap-4">
            <FormField v-slot="{ componentField }" name="voter_title">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Título de eleitor</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="title_section">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Seção do título</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="title_zone">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Zona do título</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="flex basis-auto justify-between items-center gap-4">
            <FormField v-slot="{ componentField }" name="work_card">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Carteira de Trabalho</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="card_series">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Série da carteira</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="card_date">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Data da emissão da carteira</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="card_UF">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">UF da carteira</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div>
            <span class="text-black text-lg font-medium">Endereço</span>
            <hr class="mt-2">
          </div>
          <FormField v-slot="{ componentField }" name="CEP">
            <FormItem class="w-72">
              <FormLabel class="text-gray-500">CEP</FormLabel>
              <FormControl>
                <Input type="text" class="h-12 text-black" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <div class="flex basis-auto justify-between items-baseline gap-4">
            <FormField v-slot="{ componentField }" name="address">
              <FormItem class="w-8/12">
                <FormLabel class="text-gray-500">Logradouro</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="address_number">
              <FormItem class="w-4/12">
                <FormLabel class="text-gray-500">Número</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="flex basis-auto justify-between items-baseline gap-4">
            <FormField v-slot="{ componentField }" name="state">
              <FormItem class="w-4/12">
                <FormLabel class="text-gray-500">Estado</FormLabel>
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
            <FormField v-slot="{ componentField }" name="city">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Cidade</FormLabel>
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
            <FormField v-slot="{ componentField }" name="neighborhood">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Bairro</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="flex basis-auto justify-between items-center gap-4">
            <FormField v-slot="{ componentField }" name="reference">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Referência</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="complement">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Complemento</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div>
            <span class="text-black text-lg font-medium">Contato</span>
            <hr class="mt-2">
          </div>
          <div class="flex basis-auto justify-between items-baseline gap-4">
            <FormField v-slot="{ componentField }" name="phone">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Telefone</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="email">
              <FormItem class="w-full">
                <FormLabel class="text-gray-500">Email</FormLabel>
                <FormControl>
                  <Input type="text" class="h-12 text-black" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <DialogFooter>
            <DialogClose as-child>
              <Button class="text-lg self-end bg-silver hover:bg-silver hover:opacity-85 text-black/30 rounded-md px-10 py-6" type="submit">
                Cancelar
              </Button> 
            </DialogClose> 
            <Button class="text-lg self-end bg-azure-radiance-darker hover:bg-azure-radiance-darker hover:opacity-85 text-white rounded-md px-10 py-6" type="submit">
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </DialogScrollContent>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogScrollContent,
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
import camera from '@/assets/svg/users/camera.svg'

const cameraSrc = camera

const df = new DateFormatter('pt-BR', {
  dateStyle: 'long',
})

const placeholder = ref()
const date = ref(new Date());
const dp = ref();
const isDialogOpen = ref(false);

const toggleDialog =() => {
  isDialogOpen.value = !isDialogOpen.value
}

const selectDate = () => {
  dp.value.selectDate();
}

const { handleSubmit, setValues, values } = useForm({
  validationSchema: formSchema,
  initialValues: {},
})

const value = computed({
  get: () => values.dob ? parseDate(values.dob) : undefined,
  set: val => val,
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
  console.log(date)
  toggleDialog()
})
</script>

<script>
const formSchema = toTypedSchema(z.object({
  username: z.string({
    required_error: "Campo obrigatório",
  })
  ,mother_name: z.optional(z.string())
  ,father_name: z.optional(z.string())
  ,cpf: z.string({
    required_error: "Campo obrigatório",
  })
  ,marital_status: z.optional(z.string())
  ,surname: z.optional(z.string())
  ,profile: z.string({
    required_error: "Campo obrigatório",
  })
  ,function: z.optional(z.string())
  ,place_of_birth: z.optional(z.string())
  ,pix: z.optional(z.string())
  ,start_time: z.optional(z.string())
  ,end_time: z.optional(z.string())
  ,saturday_start_time: z.optional(z.string())
  ,saturday_end_time: z.optional(z.string())
  ,id: z.optional(z.string())
  ,UF_identity: z.optional(z.string())
  ,id_UF: z.optional(z.string())
  ,voter_title: z.optional(z.string())
  ,title_section: z.optional(z.string())
  ,title_zone: z.optional(z.string())
  ,work_card: z.optional(z.string())
  ,card_series: z.optional(z.string())
  ,card_date: z.optional(z.string())
  ,card_UF: z.optional(z.string())
  ,CEP: z.string({
    required_error: "Campo obrigatório",
  })
  ,address: z.string({
    required_error: "Campo obrigatório",
  })
  ,address_number: z.string({
    required_error: "Campo obrigatório",
  })
  ,state: z.optional(z.string())
  ,city: z.string({
    required_error: "Campo obrigatório",
  })
  ,neighborhood: z.string({
    required_error: "Campo obrigatório",
  })
  ,reference: z.optional(z.string())
  ,complement: z.optional(z.string())
  ,phone: z.string({
    required_error: "Campo obrigatório",
  })
  ,email: z.string({
    required_error: "Campo obrigatório",
  })
  ,dob: z
    .string({
      required_error: "Campo obrigatório",
    })
    .refine(v => v, { message: 'A date of birth is required.' }),
}))
</script>


<style>

</style>