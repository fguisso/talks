<template>
  <div class="avatar-badge">
    <div class="stack">
      <img :src="avatarSrc" alt="avatar" />
      <img :src="photoSrc" alt="photo" class="behind" />
    </div>
    <div class="who">
      <div class="name">{{ name }}</div>
      <div class="role">{{ role }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  avatar: { type: String, default: 'img/avatar.jpg' },
  photo:  { type: String, default: 'img/photo.png' },
  name:   { type: String, default: 'Fernando Guisso' },
  role:   { type: String, default: 'guisso.dev · Comunidade PotiLivre' },
})

const base = import.meta.env.BASE_URL
const avatarSrc = computed(() => `${base}${props.avatar.replace(/^\.?\//, '')}`)
const photoSrc = computed(() => `${base}${props.photo.replace(/^\.?\//, '')}`)
</script>

<style scoped>
.avatar-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
}
.stack { display: inline-flex; align-items: center; }
.stack img {
  width: 42px; height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--paper);
  box-shadow: 0 0 0 1px var(--line);
  filter: grayscale(1);
}
.stack img.behind { margin-left: -14px; z-index: -1; }
.who { text-align: left; }
.who .name { font-weight: 700; font-size: 0.84rem; color: var(--ink); }
.who .role {
  font-size: 0.62rem; color: var(--muted);
  text-transform: uppercase; letter-spacing: 0.12em; margin-top: 1px;
}
</style>
