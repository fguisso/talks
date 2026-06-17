<template>
  <div class="slidev-layout statement">
    <div class="stmt-inner">
      <slot />
    </div>
    <img v-if="$frontmatter.fist" class="stmt-fist" :src="fist" alt="" />
    <DeckFooter />
  </div>
</template>

<script setup>
const fist = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/logos/fist.svg`
</script>

<style scoped>
.statement {
  display: flex;
  align-items: center;
}
.stmt-inner { max-width: 44ch; }
.stmt-fist {
  position: absolute;
  right: 5rem;
  top: 50%;
  transform: translateY(-50%);
  height: 76%;
  width: auto;
  filter: grayscale(1);
  pointer-events: none;
}
.stmt-inner :deep(h1) {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 3.1rem;
  line-height: 1.06;
  margin: 0;
}
.stmt-inner :deep(h1)::before { content: none; }
.stmt-inner :deep(blockquote) {
  font-size: 1.6rem;
  border-left-width: 3px;
  max-width: 34ch;
}
.stmt-inner :deep(p) { font-size: 1.05rem; max-width: 42ch; }
</style>
