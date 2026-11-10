<script setup>
/** One line of the speaker script. "(▶)" becomes a click cue badge. */
import { computed } from 'vue'
import Jp from './Jp.vue'

const props = defineProps({ jp: { type: String, required: true }, en: { type: String, required: true } })
const parts = computed(() => props.jp.split('(▶)'))
</script>

<template>
  <p class="line"><template v-for="(part, i) in parts" :key="i"><span v-if="i > 0" class="cue">▶</span><Jp :text="part" /></template><span class="en">{{ en }}</span></p>
</template>
