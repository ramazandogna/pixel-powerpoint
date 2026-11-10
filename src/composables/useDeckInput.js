import { onBeforeUnmount, onMounted } from 'vue'
import { slideFromHash, toggleFullscreen, useDeck } from './useDeck.js'

const NEXT_KEYS = ['ArrowRight', 'PageDown', ' ', 'Enter', 'ArrowDown']
const PREV_KEYS = ['ArrowLeft', 'PageUp', 'ArrowUp', 'Backspace']
const SWIPE_THRESHOLD_PX = 50

/** Keyboard, touch-swipe and URL-hash navigation for the deck. */
export function useDeckInput() {
  const deck = useDeck()
  let touchStartX = null

  function onKeydown(event) {
    if (NEXT_KEYS.includes(event.key)) {
      event.preventDefault()
      deck.next()
    } else if (PREV_KEYS.includes(event.key)) {
      event.preventDefault()
      deck.prev()
    } else if (event.key === 'f' || event.key === 'F') toggleFullscreen()
    else if (event.key === 'Home') deck.goTo(0, -1)
    else if (event.key === 'End') deck.goTo(deck.state.total - 1, 1)
  }
  const onTouchStart = (event) => (touchStartX = event.touches[0].clientX)
  function onTouchEnd(event) {
    if (touchStartX === null) return
    const dx = event.changedTouches[0].clientX - touchStartX
    if (Math.abs(dx) > SWIPE_THRESHOLD_PX) (dx < 0 ? deck.next : deck.prev)()
    touchStartX = null
  }
  const onHashChange = () => deck.goTo(slideFromHash())

  onMounted(() => {
    addEventListener('keydown', onKeydown)
    addEventListener('touchstart', onTouchStart, { passive: true })
    addEventListener('touchend', onTouchEnd)
    addEventListener('hashchange', onHashChange)
  })
  onBeforeUnmount(() => {
    removeEventListener('keydown', onKeydown)
    removeEventListener('touchstart', onTouchStart)
    removeEventListener('touchend', onTouchEnd)
    removeEventListener('hashchange', onHashChange)
  })
}
