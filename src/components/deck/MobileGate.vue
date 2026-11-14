<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { toggleFullscreen, useDeck } from '@/composables/useDeck.js'

/* Touch devices only: a big "rotate + fullscreen" welcome, and large fixed controls
   outside the scaled stage (inside it they shrink to a few pixels on a phone). */
const { next, prev } = useDeck()
const touch = ref(false)
const portrait = ref(false)
const full = ref(false)
const dismissed = ref(false)
const canFull = !!document.documentElement.requestFullscreen

function update() {
  touch.value = matchMedia('(pointer: coarse)').matches
  portrait.value = matchMedia('(orientation: portrait)').matches
  full.value = !!document.fullscreenElement
}

async function start() {
  try {
    if (canFull && !document.fullscreenElement) await document.documentElement.requestFullscreen()
    await screen.orientation?.lock?.('landscape')
  } catch {
    /* iOS / unsupported: the user rotates by hand */
  }
  dismissed.value = true
  update()
}

onMounted(() => {
  update()
  addEventListener('resize', update)
  document.addEventListener('fullscreenchange', update)
})
onBeforeUnmount(() => {
  removeEventListener('resize', update)
  document.removeEventListener('fullscreenchange', update)
})
</script>

<template>
  <template v-if="touch">
    <div v-if="portrait || (!dismissed && canFull && !full)" class="mg">
      <div class="mg-phone" :class="{ turn: portrait }"><i></i></div>
      <p class="mg-t">{{ portrait ? '横にしてください' : 'フルスクリーンで見よう' }}</p>
      <p class="mg-s">{{ portrait ? 'Rotate your phone' : 'Best in fullscreen' }}</p>
      <button v-if="canFull && !full" class="mg-go" @click="start">⛶ フルスクリーン / Fullscreen</button>
      <button v-if="!portrait" class="mg-skip" @click="dismissed = true">このまま見る / Continue</button>
    </div>
    <div v-else class="mc">
      <button aria-label="Önceki" @click="prev">◀</button>
      <button v-if="canFull" aria-label="Tam ekran" @click="toggleFullscreen">⛶</button>
      <button aria-label="Sonraki" @click="next">▶</button>
    </div>
  </template>
</template>

<style>
@media (pointer: coarse) {
  #ctrl { display: none !important; }
}
.mg {
  position: fixed; inset: 0; z-index: 100; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 14px; padding: 24px;
  background: #1c1f26; color: #fff; text-align: center; font-family: 'DotGothic16', sans-serif;
}
.mg-phone {
  width: 70px; height: 120px; border: 6px solid #f08a4b; border-radius: 14px;
  position: relative; box-shadow: 6px 6px 0 #e4572e;
}
.mg-phone i { position: absolute; left: 50%; bottom: 6px; width: 14px; height: 4px; margin-left: -7px; background: #f08a4b; }
.mg-phone.turn { animation: mg-turn 2.2s ease-in-out infinite; }
@keyframes mg-turn { 0%, 25% { transform: rotate(0) } 55%, 100% { transform: rotate(-90deg) } }
.mg-t { font-size: 28px; margin: 18px 0 0; }
.mg-s { font-size: 18px; margin: 0; opacity: .7; }
.mg-go {
  margin-top: 10px; font: inherit; font-size: 22px; padding: 18px 28px; min-height: 64px;
  background: #e4572e; color: #fff; border: 0; border-radius: 14px; box-shadow: 0 6px 0 #a83a1b;
  animation: mg-pulse 1.6s ease-in-out infinite;
}
.mg-go:active { transform: translateY(4px); box-shadow: 0 2px 0 #a83a1b; }
.mg-skip { font: inherit; font-size: 16px; background: none; color: #fff; opacity: .6; border: 0; padding: 12px; }
@keyframes mg-pulse { 50% { transform: scale(1.05) } }
@media (prefers-reduced-motion: reduce) { .mg-phone.turn { animation: none; transform: rotate(-90deg) } .mg-go { animation: none } }
.mc {
  position: fixed; z-index: 50; right: calc(12px + env(safe-area-inset-right, 0px));
  bottom: calc(12px + env(safe-area-inset-bottom, 0px)); display: flex; gap: 10px;
}
.mc button {
  width: 56px; height: 56px; font-size: 24px; border: 0; border-radius: 14px;
  background: rgba(43, 47, 58, .85); color: #fff; box-shadow: 0 4px 0 #1c1f26;
}
.mc button:active { background: #e4572e; transform: translateY(3px); box-shadow: 0 1px 0 #1c1f26; }
</style>
