import { onBeforeUnmount, onMounted, ref } from 'vue'

export const STAGE_WIDTH = 1600
export const STAGE_HEIGHT = 900

/** Scale factor that letterboxes the 1600×900 stage into the window. */
export function useStageScale() {
  const scale = ref(1)
  const fit = () => (scale.value = Math.min(innerWidth / STAGE_WIDTH, innerHeight / STAGE_HEIGHT))
  fit()
  onMounted(() => addEventListener('resize', fit))
  onBeforeUnmount(() => removeEventListener('resize', fit))
  return scale
}
