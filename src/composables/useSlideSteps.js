import { useSlideContext } from './useSlideContext.js'

/**
 * Step-by-step reveal inside a slide.
 * `frag(n)` returns the classes for the element revealed at step n (1-based):
 *   <div class="bubble" :class="frag(1)">…</div>
 * The number of steps is the number of such elements in the slide.
 */
export function useSlideSteps() {
  const { step } = useSlideContext()
  const frag = (n) => ({ frag: true, [`fs${n}`]: true, on: step.value >= n })
  return { frag, step }
}
