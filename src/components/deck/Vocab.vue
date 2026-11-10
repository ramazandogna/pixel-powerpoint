<script setup>
/** Highlighted vocabulary word with its list number badge (number comes from data/vocabulary.js). */
import { computed } from 'vue'
import { findVocab } from '@/data/vocabulary.js'

const props = defineProps({ word: { type: String, required: true } })
const entry = computed(() => findVocab(props.word))
</script>

<template>
  <span class="v" :data-n="entry.n"><ruby>{{ word }}<rt>{{ entry.reading }}</rt></ruby></span>
</template>
