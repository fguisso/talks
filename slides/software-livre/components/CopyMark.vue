<template>
  <svg
    class="copymark"
    :width="size"
    :height="size"
    viewBox="0 0 100 100"
    :style="{ opacity }"
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="44" fill="none" :stroke="color" :stroke-width="stroke" />
    <!-- mirrored serif P — the PotiLeft / copyleft wink -->
    <text
      x="50" y="50"
      text-anchor="middle"
      dominant-baseline="central"
      :fill="color"
      font-family="'Newsreader', Georgia, serif"
      font-weight="500"
      font-size="58"
      transform="scale(-1,1) translate(-100,0)"
    >P</text>
  </svg>
</template>

<script setup>
defineProps({
  size:    { type: [Number, String], default: 120 },
  color:   { type: String, default: '#0c0c0c' },
  stroke:  { type: [Number, String], default: 5 },
  opacity: { type: [Number, String], default: 1 },
})
</script>

<style scoped>
.copymark { display: block; }
</style>
