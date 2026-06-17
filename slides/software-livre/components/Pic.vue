<template>
  <img :src="full" />
</template>

<script setup>
import { computed } from 'vue'

// Path relative to the public/ root (no leading "./" or "/").
// Resolved against BASE_URL so it works on "/", "/presenter/" and under a deploy base.
const props = defineProps({
  src: { type: String, required: true },
})

const full = computed(() => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${props.src.replace(/^\.?\//, '')}`)
</script>
