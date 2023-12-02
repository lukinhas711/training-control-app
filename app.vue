<template>
  <div
    class="flex flex-col items-center gap-6 justify-center bg-gradient-to-tr from-gray-900 to-cyan-950 h-screen"
  >
    <span class="text-cyan-100 flex items-center justify-center gap-2"
      ><Icon name="mingcute:loading-line" class="w-6 h-6 animate-spin" /> Site
      em construção</span
    >
    <NuxtLink
      external
      to="https://lucasribeiro.dev.br"
      class="flex flex-col items-center gap-3 duration-300"
    >
      <Icon name="healthicons:gym-outline" class="w-20 h-20 text-cyan-100" />
    </NuxtLink>
  </div>
</template>
