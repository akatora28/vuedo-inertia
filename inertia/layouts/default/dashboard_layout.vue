<script setup lang="ts">

</script>
<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar? -->

    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <header class="sticky top-0 z-50 flex w-full bg-white dark:bg-black">
        <div class="flex flex-grow items-center justify-end px-4 py-4">
          <h1 class="text-black dark:text-white">Dashboard Layout</h1>
        </div>

      </header>
      <slot />
    </div>
  </div>
</template>
