<template>
  <div class="slidev-layout content-slide two-cols">
    <div class="tc-head">
      <slot name="default" />
    </div>
    <div class="tc-grid">
      <div class="tc-left"><slot name="left" /></div>
      <div class="tc-right"><slot name="right" /></div>
    </div>
    <DeckFooter />
  </div>
</template>

<style scoped>
.two-cols { display: flex; flex-direction: column; }
.tc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  flex: 1;
  align-content: start;
}
.tc-right { border-left: 1px solid var(--line); padding-left: 2rem; }
</style>
