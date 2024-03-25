<script>
import { Head } from '@inertiajs/vue3'

export default {
  data() {
    return {
      isLogin: true,
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    toggleForm() {
      this.isLogin = !this.isLogin;
    },
    handleSubmit() {
      // Implement authentication logic here
      console.log('Form Submitted', this.user);
    },
  },
};
</script>

<template>
  <Head title="Sign In" />
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-700">
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" v-model="user.email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" v-model="user.password">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            {{ isLogin ? 'Login' : 'Sign Up' }}
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#" @click="toggleForm">
            {{ isLogin ? 'Need an account? Sign Up' : 'Have an account? Login' }}
          </a>
        </div>
      </form>
    </div>
  </div>
</template>
