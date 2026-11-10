import { reactive, readonly } from 'vue'

/** Interval for re-playing a slide's entrance animations (charts, counters, …). */
export const REPLAY_INTERVAL_MS = 9000

/**
 * Single deck store shared by every component of the presentation page.
 *
 * - `current`   index of the visible slide
 * - `leaving`   index of the slide that is turning away (page-turn animation), or -1
 * - `steps[i]`  how many steps (.frag elements) of slide i are revealed
 * - `stepCounts[i]` total steps of slide i (registered by <Slide> on mount)
 */
const state = reactive({
  total: 0,
  current: -1,
  leaving: -1,
  direction: 1,
  busy: false,
  steps: [],
  stepCounts: [],
  meta: [],
  replayTick: 0,
  softPulse: '',
})

function registerSlide(index, { stepCount, meta }) {
  state.stepCounts[index] = stepCount
  state.meta[index] = meta
  state.steps[index] ??= 0
}

/** Show slide `target`. `direction` > 0 turns the page forward, < 0 backward. */
function goTo(target, direction) {
  const n = Math.max(0, Math.min(state.total - 1, target))
  if (n === state.current || state.busy) return
  const dir = direction || (n > state.current ? 1 : -1)

  // Going back shows the slide fully revealed; going forward starts at step 0.
  state.steps[n] = dir < 0 ? state.stepCounts[n] || 0 : 0
  if (state.current >= 0) {
    state.busy = true
    state.leaving = state.current
    state.direction = dir
  }
  state.current = n
  state.softPulse = ''
  syncHash(n)
}

/** Reveal the next step, or turn to the next slide when all steps are shown. */
function next() {
  if (state.busy) return
  const i = state.current
  if (state.steps[i] < state.stepCounts[i]) {
    state.steps[i] += 1
    return
  }
  goTo(i + 1, 1)
}

function prev() {
  if (state.busy) return
  goTo(state.current - 1, -1)
}

/** Called by <Slide> when its page-turn animation ends. */
function onTurnEnd(index) {
  const finished = state.direction > 0 ? index === state.leaving : index === state.current
  if (!finished) return
  state.leaving = -1
  state.busy = false
}

let tick = 0
/** Periodically replay entrance animations; every second tick adds a soft "breathing" pulse. */
function startReplayLoop() {
  return setInterval(() => {
    if (state.current >= 0 && !state.busy) state.replayTick += 1
    tick += 1
    if (state.current < 0 || state.busy || tick % 2) return
    state.softPulse = state.softPulse === 'a1' ? 'a2' : 'a1'
  }, REPLAY_INTERVAL_MS)
}

function syncHash(n) {
  const hash = `#s${n + 1}`
  if (location.hash !== hash) history.replaceState(null, '', hash)
}

export function slideFromHash() {
  const match = /^#s(\d+)$/.exec(location.hash)
  return match ? Number(match[1]) - 1 : 0
}

export function toggleFullscreen() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen?.()
  else document.exitFullscreen()
}

export function useDeck() {
  return {
    state: readonly(state),
    setTotal: (total) => (state.total = total),
    registerSlide,
    goTo,
    next,
    prev,
    onTurnEnd,
    startReplayLoop,
  }
}
