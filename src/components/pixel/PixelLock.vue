<script setup>
/** Animated pixel padlock with a "safe" badge (email slide). */
import { bitmapToPixels } from '@/utils/pixels.js'

const PALETTE = { K: '#1c1f26', S: '#9aa0ab', s: '#d7dbe2', C: '#f08a4b', Y: '#ffd166', D: '#c9662f', W: '#ffffff', G: '#2a9d8f' }
const SHACKLE = ['....KKKKKK....', '...KssssssK...', '..KsK....KsK..', '..KsK....KsK..', '..KsK....KsK..']
const BODY = ['KKKKKKKKKKKKKK', 'KYYCCCCCCCCCCK', 'KYCCCCCCCCCCCK', 'KCCCCKKKKCCCCK', 'KCCCCKKKKCCCCK', 'KCCCCCKKCCCCCK', 'KCCCCCKKCCCCCK', 'KCCCCCCCCCCCCK', 'KDDDDDDDDDDDDK', 'KKKKKKKKKKKKKK']
const BADGE = ['..GGGG..', '.GGGGGG.', 'GGGGGWGG', 'GWGGWGGG', 'GGWWGGGG', '.GGGGGG.', '..GGGG..', '...GG...']

const shackle = bitmapToPixels(SHACKLE, PALETTE)
const body = bitmapToPixels(BODY, PALETTE, 5)
const badge = bitmapToPixels(BADGE, PALETTE)
</script>

<template>
  <svg viewBox="0 0 22 17" width="300" height="232" shape-rendering="crispEdges"><g class="shk"><rect v-for="(p, i) in shackle" :key="i" :x="p.x" :y="p.y" width="1.02" height="1.02" :fill="p.fill" /></g><g><rect v-for="(p, i) in body" :key="i" :x="p.x" :y="p.y" width="1.02" height="1.02" :fill="p.fill" /></g><g class="bdg" transform="translate(13 8)"><rect v-for="(p, i) in badge" :key="i" :x="p.x" :y="p.y" width="1.02" height="1.02" :fill="p.fill" /></g><g class="spk"><rect x="18" y="1" width="1" height="3" fill="#ffd166" /><rect x="17" y="2" width="3" height="1" fill="#ffd166" /></g></svg>
</template>
