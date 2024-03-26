<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

import logo from '@/images/logo-white.png'
</script>
<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <aside
      class="absolute left-0 top-0 z-30 flex h-screen w-72.5 flex-col overflow-y-hidden dark:bg-gray-700 lg:static lg:traslate-x-0 xl:translate-x-0"
      :class="'md:-translate-x-full'"
      ref="target"
      >
      <div class="flex items-center justify-center gap-2 px-6 py-5.5 lg:py-6.5">
        <Link :href="'/'">
          <img class="max-w-[160px]" :src="logo" alt="Logo" />
        </Link>
        <button class="block lg:hidden">
          <svg
            class="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

        <div class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav class="mt-1 py-4 lg:mt-1 lg:px-6">
            <div>
              <h3 class="mb-4 ml-4 text-sm font-medium">Menu</h3>
              <ul class="mb-6 flex flex-col gap-1.5">
                <li>Link</li>
              </ul>
            </div>
          </nav>
        </div>
    </aside>

    <!-- TODO eventually component-ize (is that a word?) this -->
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <header class="sticky top-0 z-20 flex w-full bg-white dark:bg-black">
        <div class="flex flex-grow items-center justify-end px-4 py-4">
          <!--
          <button
            class="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden">
          </button>
          -->
          <h1 class="text-black dark:text-white">Header</h1>
        </div>
      </header>

      <!-- Slot is main content -->
      <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <slot />
      </div>
    </div>
  </div>
</template>
