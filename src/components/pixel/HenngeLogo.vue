<script setup>
/** Official HENNGE logo. `kind="mark"` crops the viewBox to the symbol only. */
import { LOGO_PATH } from '@/data/logo.js'

defineProps({
  kind: { type: String, default: 'wordmark', validator: (v) => ['mark', 'wordmark'].includes(v) },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  glow: { type: Boolean, default: false },
})
</script>

<template>
  <svg v-if="kind === 'mark'" :class="['mk', { glow }]" viewBox="-.5 -.5 36 36" :width="width" :height="height"><path :d="LOGO_PATH" fill="currentColor" fill-rule="evenodd" /></svg>
  <svg v-else :class="['wm', { glow }]" viewBox="0 0 173 35" :width="width" :height="height" role="img" aria-label="HENNGE"><path :d="LOGO_PATH" fill="currentColor" fill-rule="evenodd" /></svg>
</template>
