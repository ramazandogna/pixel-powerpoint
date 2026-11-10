<script setup>
/** Country flag (tr / np / cn) drawn as inline SVG. */
import { FLAGS } from '@/data/flags.js'

defineProps({ country: { type: String, required: true } })
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -- trusted, static artwork from data/flags.js -->
  <svg viewBox="0 0 30 20" v-html="FLAGS[country]"></svg>
</template>
