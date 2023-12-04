<template>
  <div
    class="flex flex-col items-center gap-6 justify-center bg-gradient-to-tr from-gray-900 to-cyan-950 h-screen"
  >
    <BaseButton
      icon="material-symbols-light:10k"
      :error="error"
      :success="success"
      @click="request"
    >
      Teste o botão
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const success = ref(false)
const error = ref(false)
const response = ref(500)

const request = (): void => {
  if (response.value === 200) {
    success.value = true
  } else {
    error.value = true
  }
}
</script>
