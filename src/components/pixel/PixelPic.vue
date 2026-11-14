<script setup>
/** Multi-colour pixel picture (emoji replacement). `size` = rendered height in px. */
import { computed } from 'vue'
import { PICS, PIC_PALETTE } from '@/data/icons.js'
import { bitmapToPixels } from '@/utils/pixels.js'

const props = defineProps({ name: { type: String, required: true }, size: { type: Number, default: 48 } })
const rows = computed(() => PICS[props.name])
const pixels = computed(() => bitmapToPixels(rows.value, PIC_PALETTE))
const w = computed(() => rows.value[0].length)
const h = computed(() => rows.value.length)
</script>

<template>
  <svg class="pp" :class="`pp-${name}`" :viewBox="`0 0 ${w} ${h}`" :height="size" :width="(size * w) / h" shape-rendering="crispEdges" aria-hidden="true"><rect v-for="(p, i) in pixels" :key="i" :x="p.x" :y="p.y" width="1.02" height="1.02" :fill="p.fill" /></svg>
</template>
