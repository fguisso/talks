<template>
  <div class="slidev-layout center">
    <div class="center-inner">
      <slot />
    </div>
    <DeckFooter />
  </div>
</template>

<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.center-inner {
  width: 100%;
  max-width: 880px;
  text-align: center;
}
.center-inner :deep(h1) { font-size: 2.6rem; }
</style>
