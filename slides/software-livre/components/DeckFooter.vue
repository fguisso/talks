<template>
  <div class="deck-footer">
    <div class="foot-left">
      <img class="foot-mark" :src="mark" alt="PotiLivre" />
      <span>{{ label }}</span>
    </div>
    <div>{{ right }}</div>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, default: 'PotiLivre · Software Livre, Comunidade & Soberania' },
  right: { type: String, default: 'guisso.dev' },
})
const mark = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/logos/potilivre.png`
</script>
