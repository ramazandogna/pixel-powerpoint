<script setup>
/** The presentation: a 1600×900 stage scaled to the window, one slide visible at a time. */
import { computed, onBeforeUnmount, onMounted } from 'vue'
import DeckControls from '@/components/deck/DeckControls.vue'
import SlideHost from '@/components/deck/SlideHost.vue'
import StepDots from '@/components/deck/StepDots.vue'
import { slideFromHash, useDeck } from '@/composables/useDeck.js'
import { useDeckInput } from '@/composables/useDeckInput.js'
import { useStageScale } from '@/composables/useStageScale.js'
import { SLIDES } from '@/slides/index.js'

const deck = useDeck()
deck.setTotal(SLIDES.length)
useDeckInput()
const scale = useStageScale()
const progress = computed(() => (deck.state.current < 0 ? undefined : `${((deck.state.current + 1) / SLIDES.length) * 100}%`))

let replayTimer
onMounted(() => {
  deck.goTo(slideFromHash(), 1)
  replayTimer = deck.startReplayLoop()
})
onBeforeUnmount(() => clearInterval(replayTimer))
</script>

<template>
  <div id="bar" :style="{ width: progress }"></div>
  <div id="stage" :style="{ '--s': scale }"><StepDots /><DeckControls /><SlideHost v-for="(slide, i) in SLIDES" :key="i" :index="i"><component :is="slide" /></SlideHost></div>
</template>
