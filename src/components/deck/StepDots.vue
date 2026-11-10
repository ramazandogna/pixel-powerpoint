<script setup>
/** Presenter hint: one square per step of the current slide (filled = shown). */
import { computed } from 'vue'
import { useDeck } from '@/composables/useDeck.js'

const { state } = useDeck()
const count = computed(() => state.stepCounts[state.current] || 0)
const shown = computed(() => state.steps[state.current] || 0)
const meta = computed(() => state.meta[state.current] || {})
</script>

<template>
  <div id="steps" aria-hidden="true" :class="{ qr: meta.qr, qt: !!meta.question }"><template v-if="count"><i v-for="i in count + 1" :key="i" :class="{ on: i - 1 <= shown, cur: i - 1 === shown }"></i></template></div>
</template>
