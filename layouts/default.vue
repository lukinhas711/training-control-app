<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const title = 'ACT - Aplicativo para controle de treino'
const description = 'Um site para controle de treinamento e progresso'
const url = 'https://training-control-app.pages.dev'

useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,

  description,
  ogDescription: description,
  twitterDescription: description,

  ogUrl: url,
  robots: {
    index: true,
    follow: true,
  },
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'pt-BR',
  },
  link: [
    {
      rel: 'canonical',
      href: url,
    },
  ],
})
</script>
