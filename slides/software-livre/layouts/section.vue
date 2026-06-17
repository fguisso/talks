<template>
  <div class="slidev-layout section">
    <div class="watermark">
      <img :src="mark" alt="" />
    </div>
    <div class="sec-top">
      <span class="sec-part" v-if="$frontmatter.part">{{ $frontmatter.part }}</span>
      <span class="sec-dur" v-if="$frontmatter.duration">{{ $frontmatter.duration }}</span>
    </div>
    <div class="sec-body">
      <slot />
    </div>
    <DeckFooter />
  </div>
</template>

<script setup>
const mark = `${import.meta.env.BASE_URL}logos/potilivre.png`
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.watermark {
  position: absolute;
  right: -70px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.watermark img {
  height: 88%;
  width: auto;
  opacity: 0.045;
  filter: grayscale(1);
}
.sec-top {
  display: flex;
  align-items: baseline;
  gap: 1.2rem;
  margin-bottom: 1rem;
}
.sec-part {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--ink);
  border: 1px solid var(--ink);
  padding: 0.25rem 0.7rem;
  border-radius: 100px;
}
.sec-dur {
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
}
.sec-body :deep(h1) {
  font-family: var(--font-display);
  font-size: 3.4rem;
  line-height: 1.04;
  font-weight: 400;
  max-width: 17ch;
  margin: 0;
}
.sec-body :deep(h1)::before { content: none; }
.sec-body :deep(p) {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  color: var(--muted);
  margin-top: 1rem;
  max-width: 46ch;
}
</style>
