<template>
  <div class="slidev-layout cover">
    <div class="cover-watermark">
      <img :src="mark" alt="" />
    </div>
    <div class="cover-head">
      <img class="cover-logo" :src="mark" alt="PotiLivre" />
      <span class="wordmark">Comunidade PotiLivre · Natal/RN</span>
      <span class="cover-rule"></span>
    </div>

    <div class="cover-body">
      <slot />
    </div>

    <div class="cover-foot">CC BY-SA 4.0 · 45–60 min</div>
  </div>
</template>

<script setup>
const mark = `${import.meta.env.BASE_URL}logos/potilivre.png`
</script>

<style scoped>
.cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.cover-watermark {
  position: absolute;
  right: -90px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.cover-watermark img {
  height: 86%;
  width: auto;
  opacity: 0.05;
  filter: grayscale(1);
}
.cover-head .cover-logo {
  height: 52px;
  width: auto;
}
.cover-head {
  position: absolute;
  top: 2.4rem; left: 3rem; right: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.cover-head .wordmark {
  font-size: 0.64rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  white-space: nowrap;
}
.cover-head .cover-rule {
  flex: 1;
  height: 1.5px;
  background: var(--ink);
}
.cover-body { max-width: 60%; }
.cover-body :deep(h1) {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 1.02;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
}
.cover-body :deep(h1)::before { content: none; }
.cover-body :deep(h2) {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: 1.4rem;
  color: var(--muted);
  max-width: 30ch;
  margin: 0 0 1.6rem;
}
.cover-foot {
  position: absolute;
  bottom: 2.4rem; right: 3rem;
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted-2);
}
</style>
