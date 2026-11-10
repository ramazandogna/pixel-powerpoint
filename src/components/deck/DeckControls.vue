<script setup>
import { toggleFullscreen, useDeck } from '@/composables/useDeck.js'

const { next, prev } = useDeck()
</script>

<template>
  <div id="ctrl"><button id="bp" aria-label="Önceki" @click="prev">◀</button><button id="bn" aria-label="Sonraki" @click="next">▶</button><button id="bf" aria-label="Tam ekran" @click="toggleFullscreen">⛶</button></div>
</template>
