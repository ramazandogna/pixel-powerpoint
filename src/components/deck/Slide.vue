<script setup>
/**
 * One full-screen page of the deck: frame, optional QR cards / question tag, and footer.
 * Handles its own page-turn and "replay" animation classes.
 */
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useDeck } from '@/composables/useDeck.js'
import { useSlideContext } from '@/composables/useSlideContext.js'
import QrBox from './QrBox.vue'
import QuestionTag from './QuestionTag.vue'
import SlideFooter from './SlideFooter.vue'

const props = defineProps({
  /** Extra layout classes, e.g. "cover" or "cover intro". */
  variant: { type: String, default: '' },
  /** Show the vocabulary QR code in the top-right and bottom-left corners. */
  qr: { type: Boolean, default: false },
  /** Research question (1–5) answered on this slide. */
  question: { type: Number, default: 0 },
})

const deck = useDeck()
const { index, isCurrent, replayTick } = useSlideContext()
const root = ref(null)
const replaying = ref(false)

const classes = computed(() => {
  const { state } = deck
  const leaving = state.leaving === index
  return [
    'slide',
    props.variant,
    {
      active: isCurrent.value || leaving,
      'turn-out': leaving && state.direction > 0,
      'turn-in': isCurrent.value && state.leaving >= 0 && state.direction < 0,
      rp: isCurrent.value && !replaying.value,
      a1: isCurrent.value && state.softPulse === 'a1',
      a2: isCurrent.value && state.softPulse === 'a2',
    },
  ]
})

// Restart CSS entrance animations: drop `rp`, force a reflow, add it back.
watch(replayTick, async () => {
  if (!isCurrent.value) return
  replaying.value = true
  await nextTick()
  void root.value.offsetWidth
  replaying.value = false
})

onMounted(() => {
  deck.registerSlide(index, {
    stepCount: root.value.querySelectorAll('.frag').length,
    meta: { qr: props.qr, question: props.question },
  })
})
</script>

<template>
  <section :id="`s${index + 1}`" ref="root" :class="classes" @animationend.self="deck.onTurnEnd(index)">
    <div class="frame"><template v-if="qr"><QrBox corner="tr" /><QrBox corner="bl" /></template><QuestionTag v-if="question" :number="question" /><slot /><SlideFooter :page="index + 1" /></div>
  </section>
</template>
