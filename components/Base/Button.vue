<template>
  <button
    :class="[
      [$style.button],
      {
        [$style.outline]: outline,
        [$style.success]: success,
        [$style.error]: error,
      },
    ]"
  >
    <Icon v-if="icon" :name="icon" class="w-5 h-5" />
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  outline: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  success: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="postcss" module>
.button {
  @apply flex items-center gap-2 bg-cyan-600 py-1 px-4 rounded-lg hover:bg-cyan-500 duration-300 font-bold text-cyan-950;
}

.outline {
  @apply bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-cyan-950;
}

.success {
  @apply bg-green-500 hover:bg-green-400;
}
.error {
  @apply bg-red-700 hover:bg-red-600 text-white;
}
</style>
