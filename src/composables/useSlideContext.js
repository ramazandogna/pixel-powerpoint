import { computed, inject, provide } from 'vue'
import { useDeck } from './useDeck.js'

const SLIDE_CONTEXT = Symbol('slide-context')

/** Provided once per slide by <SlideHost>; read by <Slide>, steps and counters. */
export function provideSlideContext(index) {
  const { state } = useDeck()
  const context = {
    index,
    isCurrent: computed(() => state.current === index),
    step: computed(() => state.steps[index] || 0),
    replayTick: computed(() => state.replayTick),
  }
  provide(SLIDE_CONTEXT, context)
  return context
}

export function useSlideContext() {
  const context = inject(SLIDE_CONTEXT, null)
  if (!context) throw new Error('useSlideContext() must be used inside <SlideHost>')
  return context
}
