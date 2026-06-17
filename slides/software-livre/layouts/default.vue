<template>
  <div class="slidev-layout content-slide default">
    <slot />
    <DeckFooter v-if="!$frontmatter.hideFooter" />
  </div>
</template>

<style scoped>
.default { display: block; }
</style>
