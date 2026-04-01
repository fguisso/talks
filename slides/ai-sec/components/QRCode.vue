<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'

const props = defineProps<{
  value: string
  size?: number
  foreground?: string
  background?: string
}>()
</script>

<template>
  <qrcode-vue
    :value="value"
    :size="size ?? 140"
    level="M"
    render-as="svg"
    :foreground="foreground ?? '#ffffff'"
    :background="background ?? 'transparent'"
  />
</template>
