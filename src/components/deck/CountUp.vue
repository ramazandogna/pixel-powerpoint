<script setup>
/**
 * Animated number that counts from 0 to `to` when its slide is shown,
 * when its step (`at`) is revealed, and on every replay tick.
 */
import { computed, ref, watch } from 'vue'
import { useSlideContext } from '@/composables/useSlideContext.js'

const props = defineProps({
  to: { type: Number, required: true },
  /** Step at which the number becomes visible (0 = immediately). */
  at: { type: Number, default: 0 },
})
const DURATION_MS = 1200

const { isCurrent, step, replayTick } = useSlideContext()
const value = ref(0)
const visible = computed(() => isCurrent.value && step.value >= props.at)

function run() {
  const start = performance.now()
  const frame = (now) => {
    const k = Math.min(1, (now - start) / DURATION_MS)
    value.value = Math.round(props.to * (1 - Math.pow(1 - k, 3)))
    if (k < 1) requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}

watch(visible, (shown) => shown && run(), { immediate: true })
watch(replayTick, () => visible.value && run())
</script>

<template>
  <span class="count">{{ value }}</span>
</template>
