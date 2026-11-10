<script setup>
/** QR code that opens the vocabulary page. */
import { QR_PATH, QR_SIZE } from '@/data/qr.js'

const VIEW = QR_SIZE
</script>

<template>
  <svg class="qr" :viewBox="`0 0 ${VIEW} ${VIEW}`" shape-rendering="crispEdges" role="img" aria-label="QR"><rect :width="VIEW" :height="VIEW" fill="#fff" /><path :d="QR_PATH" fill="#00171f" /></svg>
</template>
