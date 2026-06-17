<template>
  <span class="logo-chip" :title="label">
    <img :src="src" :alt="label" :style="{ height: h + 'px' }" />
    <span v-if="label">{{ label }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name:  { type: String, required: true },   // file basename in /logos
  label: { type: String, default: '' },
  h:     { type: [Number, String], default: 26 },
})

const src = computed(() => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/logos/${props.name}.svg`)
</script>
