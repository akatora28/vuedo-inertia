<script setup lang="ts">
import { Head } from '@inertiajs/vue3'

import { usePage, useForm } from '@inertiajs/vue3'

const props = usePage().props

const form = useForm({
  email: null,
  password: null
})

console.log(usePage().props)
console.log(usePage())
console.log(form)
</script>

<template>
  <Head title="Sign In" />
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-700">
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="form.post('/auth/sign_in')">
        <h1 class="mb-4 text-center text-xl bold">Vuedo</h1>
        <hr class="mb-4" />
        <div class="mb-4">
            <transition name="fade">
            <label
              :class="{'text-red-500': form.errors.email || props.errors?.auth }"
              class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            </transition>
            <transition name="fade">
            <input
              :class="{'text-red-500': form.errors.email || props.errors?.auth }"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              v-model="form.email"
              @input="form.clearErrors('email')"
              />
            </transition>
            <transition name="fade">
              <p class="text-red-500 text-xs" v-if="form.errors.email">{{ form.errors.email[0] }}</p>
            </transition>
        </div>
        <div class="mb-6">
          <label
            :class="{'text-red-500': form.errors.password || props.errors?.auth }"
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password">
            Password
          </label>
          <input
            :class="{'text-red-500': form.errors.password || props.errors?.auth }"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            v-model="form.password"
            @input="form.clearErrors('password')"/>
            <p class="text-red-500 text-xs" v-if="form.errors.password">{{ form.errors.password[0] }}</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold
            py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit">
            Login
          </button>
        </div>
        <div class="flex">
          <p class="text-xs">Need an account? Register here</p>
        </div>
      </form>
    </div>
  </div>
</template>
