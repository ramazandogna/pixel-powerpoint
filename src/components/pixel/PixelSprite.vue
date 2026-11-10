<script setup>
/** A 12×18 pixel-art character from `data/sprites.js`. */
import { computed } from 'vue'
import { SPRITES } from '@/data/sprites.js'
import { bitmapToPixels } from '@/utils/pixels.js'

const props = defineProps({
  name: { type: String, required: true },
  width: { type: Number, default: 84 },
  height: { type: Number, default: 126 },
})
const pixels = computed(() => {
  const sprite = SPRITES[props.name]
  return bitmapToPixels(sprite.rows, sprite.palette)
})
</script>

<template>
  <svg class="spr" viewBox="0 0 12 18" :width="width" :height="height" shape-rendering="crispEdges"><rect v-for="(p, i) in pixels" :key="i" :x="p.x" :y="p.y" width="1.02" height="1.02" :fill="p.fill" /></svg>
</template>
