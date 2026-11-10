<script setup>
/** Renderless wrapper that gives a slide its index (see useSlideContext). */
import { provideSlideContext } from '@/composables/useSlideContext.js'

const props = defineProps({ index: { type: Number, required: true } })
provideSlideContext(props.index)
</script>

<template><slot /></template>
