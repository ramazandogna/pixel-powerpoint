<script setup>
/**
 * Renders Japanese text written in furigana markup (漢字[かんじ]) as <ruby> elements.
 * Used by the data-driven pages (script, word list, question tags).
 */
import { computed } from 'vue'
import { parseFurigana } from '@/utils/furigana.js'

const props = defineProps({ text: { type: String, required: true } })
const segments = computed(() => parseFurigana(props.text))
</script>

<template><template v-for="(segment, i) in segments" :key="i"><ruby v-if="segment.base">{{ segment.base }}<rt>{{ segment.reading }}</rt></ruby><template v-else>{{ segment.text }}</template></template></template>
