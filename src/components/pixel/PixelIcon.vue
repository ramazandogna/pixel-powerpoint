<script setup>
/** 8×8 pixel icon (labels, QR caption). Inherits colour via currentColor. */
import { computed } from 'vue'
import { ICONS } from '@/data/icons.js'
import { bitmapToPixels } from '@/utils/pixels.js'

const props = defineProps({ name: { type: String, required: true } })
const pixels = computed(() => bitmapToPixels(ICONS[props.name], { X: 'currentColor', o: '#fff' }))
</script>

<template>
  <svg class="pi" viewBox="0 0 8 8" shape-rendering="crispEdges" aria-hidden="true"><rect v-for="(p, i) in pixels" :key="i" :x="p.x" :y="p.y" width="1.02" height="1.02" :fill="p.fill" /></svg>
</template>
